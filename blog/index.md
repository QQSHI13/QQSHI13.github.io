---
layout: default
title: Daily Blog
---

<div class="daily-hero">
    <div class="hero-content">
        <div class="hero-emoji">📓</div>
        <h1 class="hero-title">Daily Blog</h1>
        <p class="hero-description">
            I write every day about what I'm learning, building, and thinking. 
            Follow along for project updates, tutorials, and insights from a 12-year-old developer.
        </p>
        
        <div class="hero-stats">
            <span class="stat"><strong>{{ site.posts.size }}</strong> posts</span>
            <span class="stat-separator">•</span>
            <span class="stat"><strong>12</strong> years old</span>
            <span class="stat-separator">•</span>
            <a href="{{ '/blog/feed.xml' | relative_url }}" class="rss-link">RSS Feed 📡</a>
        </div>
    </div>
</div>

<div class="posts-container">
    {% for post in site.posts %}
    <article class="post-card">
        <div class="post-card-content">
            <header class="post-card-header">
                <div class="post-meta-row">
                    <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">
                        <span class="date-day">{{ post.date | date: "%d" }}</span>
                        <span class="date-month">{{ post.date | date: "%b" }}</span>
                        <span class="date-year">{{ post.date | date: "%Y" }}</span>
                    </time>
                    
                    {% if post.tags %}
                    <div class="post-tags">
                        {% for tag in post.tags limit:3 %}
                        <span class="tag">#{{ tag }}</span>
                        {% endfor %}
                    </div>
                    {% endif %}
                </div>
                
                <h2 class="post-title">
                    <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
                </h2>
            </header>
            
            <div class="post-excerpt">
                {{ post.excerpt }}
            </div>
            
            <footer class="post-card-footer">
                <a href="{{ post.url | relative_url }}" class="read-more">
                    <span>Read article</span>
                    <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </footer>
        </div>
    </article>
    {% endfor %}
</div>

<div class="blog-footer">
    <p>Built with ❤️ by <strong>QQ</strong> & <strong>Nova ☄️</strong></p>
</div>

<style>
/* Hero Section */
.daily-hero {
    background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
    border-bottom: 1px solid #30363d;
    padding: 60px 24px;
    text-align: center;
    margin: -40px -24px 48px;
}

.hero-content {
    max-width: 600px;
    margin: 0 auto;
}

.hero-emoji {
    font-size: 64px;
    line-height: 1;
    margin-bottom: 16px;
    filter: drop-shadow(0 4px 8px rgba(88, 166, 255, 0.3));
}

.hero-title {
    font-size: 42px;
    font-weight: 800;
    margin: 0 0 16px;
    background: linear-gradient(135deg, #58a6ff, #79b8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-description {
    font-size: 18px;
    color: #7d8590;
    line-height: 1.7;
    margin: 0 0 24px;
}

.hero-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 14px;
    color: #7d8590;
}

.stat strong {
    color: #e6edf3;
    font-weight: 600;
}

.stat-separator {
    color: #30363d;
}

.rss-link {
    color: #58a6ff;
    text-decoration: none;
    transition: color 0.2s;
}

.rss-link:hover {
    color: #79b8ff;
}

/* Posts Container */
.posts-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 720px;
    margin: 0 auto;
}

/* Post Card */
.post-card {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.post-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    border-color: #58a6ff40;
}

.post-card-content {
    padding: 24px;
}

/* Post Header */
.post-card-header {
    margin-bottom: 16px;
}

.post-meta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;
    flex-wrap: wrap;
}

.post-date {
    display: flex;
    align-items: baseline;
    gap: 4px;
    font-size: 13px;
    color: #7d8590;
}

.date-day {
    font-size: 18px;
    font-weight: 700;
    color: #58a6ff;
}

.date-month {
    font-weight: 500;
    color: #e6edf3;
}

.date-year {
    color: #7d8590;
}

.post-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.tag {
    font-size: 12px;
    color: #7d8590;
    background: #0d1117;
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid #30363d;
}

.post-card .post-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    line-height: 1.4;
}

.post-card .post-title a {
    color: #e6edf3;
    text-decoration: none;
    transition: color 0.2s;
}

.post-card .post-title a:hover {
    color: #58a6ff;
}

/* Post Excerpt */
.post-excerpt {
    color: #7d8590;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 20px;
}

.post-excerpt p {
    margin: 0;
}

/* Read More Button */
.post-card-footer {
    display: flex;
    align-items: center;
}

.read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #58a6ff;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: gap 0.2s;
}

.read-more:hover {
    gap: 12px;
}

.read-more .arrow {
    transition: transform 0.2s;
}

.read-more:hover .arrow {
    transform: translateX(4px);
}

/* Blog Footer */
.blog-footer {
    text-align: center;
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid #30363d;
    color: #7d8590;
    font-size: 14px;
}

.blog-footer strong {
    color: #e6edf3;
}

/* Responsive */
@media (max-width: 600px) {
    .daily-hero {
        padding: 40px 20px;
        margin: -40px -20px 32px;
    }
    
    .hero-title {
        font-size: 32px;
    }
    
    .hero-description {
        font-size: 16px;
    }
    
    .post-card-content {
        padding: 20px;
    }
    
    .post-card .post-title {
        font-size: 20px;
    }
    
    .post-meta-row {
        gap: 12px;
    }
}
</style>
