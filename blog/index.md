---
layout: default
title: Daily Blog
---

<div class="blog-container">
    <!-- Sidebar -->
    <aside class="blog-sidebar">
        <div class="profile-card">
            <div class="avatar">👨‍💻</div>
            <h1 class="blog-title">Daily Blog</h1>
            <p class="blog-desc">Daily writings from a 12-year-old developer building the future, one commit at a time.</p>
            
            <div class="profile-stats">
                <div class="stat-item">
                    <span class="stat-number">{{ site.posts.size }}</span>
                    <span class="stat-label">Posts</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">12</span>
                    <span class="stat-label">Years</span>
                </div>
            </div>
            
            <a href="{{ '/blog/feed.xml' | relative_url }}" class="rss-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.795 1.456-3.247 3.252-3.247 1.795.001 3.251 1.453 3.251 3.247zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368v4.811c9.353.062 16.94 7.633 17.002 16.991h4.821c-.069-12.18-9.926-22.021-22.177-22.093l-.646-.709z"/>
                </svg>
                RSS Feed
            </a>
        </div>
        
        <div class="tag-cloud">
            <h3>Tags</h3>
            <div class="tags-list">
                <span class="tag-item">#javascript</span>
                <span class="tag-item">#pwa</span>
                <span class="tag-item">#hardware</span>
                <span class="tag-item">#tutorial</span>
                <span class="tag-item">#bug-fixes</span>
                <span class="tag-item">#productivity</span>
            </div>
        </div>
    </aside>
    
    <!-- Main Content -->
    <main class="blog-main">
        <div class="posts-timeline">
            {% for post in site.posts %}
            <article class="timeline-item">
                <div class="timeline-marker">
                    <div class="timeline-dot"></div>
                    <time class="timeline-date">
                        <span class="date-num">{{ post.date | date: "%d" }}</span>
                        <span class="date-mon">{{ post.date | date: "%b" }}</span>
                    </time>
                </div>
                
                <div class="timeline-content">
                    <div class="post-preview">
                        <header class="preview-header">
                            <h2 class="preview-title">
                                <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
                            </h2>
                            
                            {% if post.tags %}
                            <div class="preview-tags">
                                {% for tag in post.tags limit:3 %}
                                <span class="preview-tag">{{ tag }}</span>
                                {% endfor %}
                            </div>
                            {% endif %}
                        </header>
                        
                        <div class="preview-excerpt">
                            {{ post.excerpt }}
                        </div>
                        
                        <a href="{{ post.url | relative_url }}" class="read-link">
                            Read article 
                            <span class="arrow">→</span>
                        </a>
                    </div>
                </div>
            </article>
            {% endfor %}
        </div>
        
        <footer class="page-footer">
            <p>Built with ❤️ by <strong>QQ</strong> & <strong>Nova ☄️</strong></p>
        </footer>
    </main>
</div>

<style>
/* ===== Page Wrapper Override ===== */
.page-content .wrapper {
    max-width: 1100px;
}

/* ===== Layout ===== */
.blog-container {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 48px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 24px;
}

@media (max-width: 900px) {
    .blog-container {
        grid-template-columns: 1fr;
        gap: 32px;
    }
}

/* ===== Sidebar ===== */
.blog-sidebar {
    position: sticky;
    top: 100px;
    height: fit-content;
}

.profile-card {
    background: rgba(22, 27, 34, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 32px 24px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 0 rgba(88,166,255,0), 0 8px 32px rgba(0,0,0,0);
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.profile-card:hover {
    border-color: rgba(88, 166, 255, 0.4);
    box-shadow: 0 0 20px rgba(88, 166, 255, 0.3), 0 8px 32px rgba(0,0,0,0.4);
}

.avatar {
    font-size: 56px;
    line-height: 1;
    margin-bottom: 16px;
    filter: drop-shadow(0 4px 12px rgba(88, 166, 255, 0.2));
}

.blog-title {
    font-size: 26px;
    font-weight: 800;
    margin: 0 0 12px;
    background: linear-gradient(135deg, #58a6ff 0%, #a371f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.blog-desc {
    font-size: 14px;
    color: #7d8590;
    line-height: 1.6;
    margin: 0 0 24px;
}

/* Stats */
.profile-stats {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(48, 54, 61, 0.5);
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.stat-number {
    font-size: 28px;
    font-weight: 800;
    color: #e6edf3;
    line-height: 1;
}

.stat-label {
    font-size: 12px;
    color: #7d8590;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* RSS Button */
.rss-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(88, 166, 255, 0.1);
    color: #58a6ff;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s;
    border: 1px solid rgba(88, 166, 255, 0.2);
}

.rss-btn:hover {
    background: rgba(88, 166, 255, 0.2);
    border-color: rgba(88, 166, 255, 0.4);
    transform: translateY(-1px);
}

/* Tag Cloud */
.tag-cloud {
    margin-top: 24px;
    padding: 24px;
    background: #161b22;
    border-radius: 16px;
    border: 1px solid #30363d;
}

.tag-cloud h3 {
    font-size: 14px;
    color: #7d8590;
    margin: 0 0 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag-item {
    font-size: 12px;
    color: #7d8590;
    background: #0d1117;
    padding: 6px 12px;
    border-radius: 20px;
    border: 1px solid #30363d;
    transition: all 0.2s;
    cursor: default;
}

.tag-item:hover {
    border-color: #58a6ff;
    color: #58a6ff;
}

/* ===== Main Content ===== */
.blog-main {
    min-width: 0;
}

/* Timeline */
.posts-timeline {
    position: relative;
    padding-left: 24px;
}

.posts-timeline::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(88,166,255,0.9) 0%, rgba(163,113,247,0.7) 50%, rgba(88,166,255,0.2) 100%);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(88, 166, 255, 0.4);
}

.timeline-item {
    position: relative;
    margin-bottom: 32px;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-marker {
    position: absolute;
    left: -24px;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.timeline-dot {
    width: 16px;
    height: 16px;
    background: #0d1117;
    border: 3px solid #58a6ff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(88, 166, 255, 0.1);
}

.timeline-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 80px;
    position: relative;
    left: 4px;
}

.date-num {
    font-size: 22px;
    font-weight: 800;
    color: #e6edf3;
    line-height: 1;
}

.date-mon {
    font-size: 11px;
    color: #7d8590;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.timeline-content {
    margin-left: 32px;
}

/* Post Preview */
.post-preview {
    background: rgba(22, 27, 34, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 0 0 0 rgba(88,166,255,0), 0 8px 32px rgba(0,0,0,0);
    transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

.post-preview:hover {
    border-color: rgba(88, 166, 255, 0.4);
    box-shadow: 0 0 20px rgba(88, 166, 255, 0.3), 0 8px 32px rgba(0,0,0,0.4);
    transform: translateX(4px);
}

.preview-header {
    margin-bottom: 16px;
}

.preview-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 12px;
    line-height: 1.4;
}

.preview-title a {
    color: #e6edf3;
    text-decoration: none;
    transition: color 0.2s;
}

.preview-title a:hover {
    color: #58a6ff;
}

.preview-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.preview-tag {
    font-size: 11px;
    color: #a371f7;
    background: rgba(163, 113, 247, 0.1);
    padding: 4px 10px;
    border-radius: 12px;
    text-transform: lowercase;
}

.preview-excerpt {
    color: #7d8590;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 20px;
}

.preview-excerpt p {
    margin: 0;
}

.read-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #58a6ff;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
}

.read-link .arrow {
    transition: transform 0.2s;
}

.read-link:hover .arrow {
    transform: translateX(4px);
}

/* Footer */
.page-footer {
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid #30363d;
    text-align: center;
    color: #7d8590;
    font-size: 14px;
}

.page-footer strong {
    color: #e6edf3;
}

/* ===== Mobile ===== */
@media (max-width: 900px) {
    .blog-sidebar {
        position: static;
    }
    
    .profile-card {
        padding: 24px;
    }
    
    .posts-timeline {
        padding-left: 16px;
    }
    
    .posts-timeline::before {
        left: 11px;
    }
    
    .timeline-marker {
        left: -16px;
    }
    
    .timeline-content {
        margin-left: 24px;
    }
    
    .post-preview {
        padding: 20px;
    }
    
    .preview-title {
        font-size: 18px;
    }
}
</style>
