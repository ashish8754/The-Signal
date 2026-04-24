/* ============================================
   THE SIGNAL — Application Logic
   Interactivity, Filtering & Rendering
   ============================================ */

// State
let state = {
    selectedInterests: new Set(['llms', 'agents', 'research', 'opensource', 'infra']),
    openClusters: new Set(['topic-llms']),
    interestsPanelOpen: false
};

// Initialize
function init() {
    loadInterests();
    renderDate();
    renderIssueNumber();
    renderInterestsPanel();
    renderFeatured();
    renderTopics();
    renderPapers();
    renderRepos();
    renderNextGen();
    setupEventListeners();
    updateRelevanceScores();
}

// Date Display
function renderDate() {
    const dateEl = document.getElementById('currentDate');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', options);
}

function renderIssueNumber() {
    const startDate = new Date('2025-01-01');
    const today = new Date();
    const daysDiff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('issueNumber').textContent = daysDiff;
}

// Load/Save Interests
function loadInterests() {
    try {
        const saved = localStorage.getItem('signal_interests');
        if (saved) {
            state.selectedInterests = new Set(JSON.parse(saved));
        }
    } catch (e) {
        console.log('LocalStorage not available');
    }
}

function saveInterests() {
    try {
        localStorage.setItem('signal_interests', JSON.stringify([...state.selectedInterests]));
    } catch (e) {
        console.log('LocalStorage not available');
    }
}

// Interests Panel
function renderInterestsPanel() {
    const grid = document.getElementById('interestsGrid');
    grid.innerHTML = NEWSLETTER_DATA.interests.map(interest => `
        <button class="interest-chip ${state.selectedInterests.has(interest.id) ? 'active' : ''}" 
                data-interest="${interest.id}">
            <span class="chip-dot"></span>
            ${interest.label}
        </button>
    `).join('');
}

function toggleInterest(interestId) {
    if (state.selectedInterests.has(interestId)) {
        state.selectedInterests.delete(interestId);
    } else {
        state.selectedInterests.add(interestId);
    }
    renderInterestsPanel();
}

function toggleInterestsPanel() {
    const panel = document.getElementById('interestsPanel');
    const toggle = document.getElementById('interestsToggle');
    state.interestsPanelOpen = !state.interestsPanelOpen;
    panel.classList.toggle('open', state.interestsPanelOpen);
    toggle.classList.toggle('active', state.interestsPanelOpen);
}

// Relevance Calculation
function calculateRelevance(itemTopics = []) {
    if (state.selectedInterests.size === 0) return 50;
    const itemTopicSet = new Set(Array.isArray(itemTopics) ? itemTopics : [itemTopics]);
    const intersection = [...state.selectedInterests].filter(x => itemTopicSet.has(x));
    const baseScore = 50;
    const bonus = (intersection.length / Math.max(itemTopicSet.size, 1)) * 50;
    return Math.min(99, Math.round(baseScore + bonus));
}

function updateRelevanceScores() {
    // Update featured relevance
    const featured = NEWSLETTER_DATA.featured;
    featured.relevance = calculateRelevance(featured.topicId);
    
    // Update topic stories
    NEWSLETTER_DATA.topics.forEach(topic => {
        topic.stories.forEach(story => {
            story.relevance = calculateRelevance(topic.id.replace('topic-', ''));
        });
    });
    
    // Re-render affected sections
    renderFeatured();
    renderTopics();
}

// Featured Section
function renderFeatured() {
    const featured = NEWSLETTER_DATA.featured;
    if (!featured) {
        document.getElementById('featuredCard').innerHTML = '<p style="padding:40px;color:var(--text-muted)">Fresh content loading... Check back soon.</p>';
        document.getElementById('featuredCount').textContent = '';
        return;
    }
    const relevance = calculateRelevance(featured.topicId);
    const container = document.getElementById('featuredCard');
    
    container.innerHTML = `
        <div class="featured-inner">
            <div class="featured-image">
                <div class="featured-image-placeholder">◈</div>
            </div>
            <div class="featured-content">
                <div class="featured-topic">
                    <span class="featured-topic-dot"></span>
                    ${featured.topic}
                </div>
                <h3 class="featured-title">${featured.title}</h3>
                <p class="featured-excerpt">${featured.excerpt}</p>
                <div class="featured-meta">
                    <span>${featured.source}</span>
                    <span>•</span>
                    <span>${featured.time}</span>
                    <span>•</span>
                    <span>${featured.readTime}</span>
                </div>
                <a href="${featured.url}" class="read-more-btn">
                    Read Full Story
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    `;
    
    document.getElementById('featuredCount').textContent = `${relevance}% match`;
}

// Topics Section
function renderTopics() {
    const container = document.getElementById('topicsContainer');
    if (!NEWSLETTER_DATA.topics || NEWSLETTER_DATA.topics.length === 0) {
        container.innerHTML = '<p style="padding:20px;color:var(--text-muted)">No topic clusters for today.</p>';
        return;
    }
    
    container.innerHTML = NEWSLETTER_DATA.topics.map(topic => {
        const isOpen = state.openClusters.has(topic.id);
        const avgRelevance = Math.round(
            topic.stories.reduce((a, s) => a + (s.relevance || calculateRelevance(topic.id.replace('topic-', ''))), 0) / topic.stories.length
        );
        
        return `
            <div class="topic-cluster ${isOpen ? 'open' : ''}" data-topic="${topic.id}">
                <div class="topic-cluster-header" onclick="toggleCluster('${topic.id}')">
                    <div class="topic-cluster-title">
                        <span class="topic-cluster-icon" style="color: ${topic.color}">${topic.icon}</span>
                        <span class="topic-cluster-name">${topic.name}</span>
                        <span class="topic-cluster-count">${topic.stories.length} stories</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 16px;">
                        <div class="story-relevance">
                            <span class="relevance-score">${avgRelevance}%</span>
                            <div class="relevance-bar">
                                <div class="relevance-fill" style="width: ${avgRelevance}%"></div>
                            </div>
                        </div>
                        <span class="topic-cluster-toggle">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="topic-cluster-content">
                    <div class="topic-cluster-stories">
                        ${topic.stories.map((story, idx) => `
                            <a href="#" class="story-card">
                                <span class="story-rank">${idx + 1}</span>
                                <div class="story-info">
                                    <div class="story-title">${story.title}</div>
                                    <div class="story-meta">
                                        <span class="story-source">${story.source}</span>
                                        <span class="story-time">${story.time}</span>
                                    </div>
                                </div>
                                <div class="story-relevance">
                                    <span class="relevance-score">${story.relevance || calculateRelevance(topic.id.replace('topic-', ''))}%</span>
                                    <div class="relevance-bar">
                                        <div class="relevance-fill" style="width: ${story.relevance || calculateRelevance(topic.id.replace('topic-', ''))}%"></div>
                                    </div>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleCluster(topicId) {
    if (state.openClusters.has(topicId)) {
        state.openClusters.delete(topicId);
    } else {
        state.openClusters.add(topicId);
    }
    renderTopics();
}

// Papers Section
function renderPapers() {
    const grid = document.getElementById('papersGrid');
    
    grid.innerHTML = NEWSLETTER_DATA.papers.map(paper => `
        <div class="paper-card">
            <span class="paper-badge">${paper.badge}</span>
            <h4 class="paper-title">${paper.title}</h4>
            <p class="paper-authors">${paper.authors}</p>
            <p class="paper-abstract">${paper.abstract}</p>
            <div class="paper-footer">
                <span class="paper-journal">${paper.journal}</span>
                <a href="${paper.url}" class="paper-link">
                    Read Paper
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    `).join('');
}

// Repos Section
function renderRepos() {
    const grid = document.getElementById('reposGrid');
    
    grid.innerHTML = NEWSLETTER_DATA.repos.map(repo => `
        <div class="repo-card">
            <div class="repo-header">
                <span class="repo-icon">⚡</span>
                <span class="repo-name">${repo.name}</span>
            </div>
            <p class="repo-desc">${repo.desc}</p>
            <div class="repo-meta">
                <span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
                    ${repo.stars}
                </span>
                <span>
                    <span class="repo-lang" style="background: ${repo.langColor}"></span>
                    ${repo.lang}
                </span>
            </div>
        </div>
    `).join('');
}

// Next-Gen Section
function renderNextGen() {
    const grid = document.getElementById('nextgenGrid');
    
    grid.innerHTML = NEWSLETTER_DATA.nextgen.map(item => `
        <div class="nextgen-card">
            <span class="nextgen-tag ${item.tagClass}">${item.tag}</span>
            <h4 class="nextgen-title">${item.title}</h4>
            <p class="nextgen-desc">${item.desc}</p>
            <span class="nextgen-source">${item.source}</span>
        </div>
    `).join('');
}

// Event Listeners
function setupEventListeners() {
    // Interests toggle
    document.getElementById('interestsToggle').addEventListener('click', toggleInterestsPanel);
    
    // Interest chips
    document.getElementById('interestsGrid').addEventListener('click', (e) => {
        const chip = e.target.closest('.interest-chip');
        if (chip) {
            toggleInterest(chip.dataset.interest);
        }
    });
    
    // Save interests
    document.getElementById('saveInterests').addEventListener('click', () => {
        saveInterests();
        updateRelevanceScores();
        toggleInterestsPanel();
    });
    
    // Reset interests
    document.getElementById('resetInterests').addEventListener('click', () => {
        state.selectedInterests = new Set(['llms', 'agents', 'research', 'opensource', 'infra']);
        renderInterestsPanel();
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Scroll spy for nav
    window.addEventListener('scroll', () => {
        const sections = ['today', 'topics', 'papers', 'repos'];
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                if (scrollPos >= top && scrollPos < bottom) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            }
        });
    });
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
