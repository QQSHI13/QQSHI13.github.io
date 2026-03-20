---
layout: default
title: Daily Blog
---

<div class="daily-banner">
    <h2>📓 Daily Blog</h2>
    <p>I write every day about what I'm learning, building, and thinking. 
    Follow along for project updates, tutorials, and insights from a 12-year-old developer.</p>
</div>

<p class="rss-link">
    <a href="{{ '/blog/feed.xml' | relative_url }}">📡 RSS Feed</a>
</p>

<ul class="post-list">
{% for post in site.posts %}
    <li>
        <h2>
            <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        <p class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%B %d, %Y" }}
            </time>
            {% if post.tags %}
            • 
            {% for tag in post.tags limit:3 %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
            {% endif %}
        </p>
        <div class="post-excerpt">
            {{ post.excerpt }}
        </div>
        <p><a href="{{ post.url | relative_url }}">Read more →</a></p>
    </li>
{% endfor %}
</ul>
