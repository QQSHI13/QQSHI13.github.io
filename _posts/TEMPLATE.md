# Daily Blog Post Template

Copy this file to `_posts/YYYY-MM-DD-your-title.md` and fill in your content.

## File Naming Convention

```
_posts/YYYY-MM-DD-short-descriptive-title.md
```

Examples:
- `2026-03-20-pomodoro-timer-pwa.md`
- `2026-03-19-bug-fixing-marathon.md`
- `2026-03-18-hello-world.md`

## Front Matter Template

```yaml
---
layout: post
title: "Your Post Title Here"
date: 2026-03-20 09:00:00 +0800
tags: [tag1, tag2, tag3]
---
```

### Tag Ideas

**Technologies:** `javascript`, `python`, `rust`, `cpp`, `html`, `css`, `react`, `vue`
**Topics:** `tutorial`, `project-update`, `bug-fixes`, `learning`, `hardware`
**Meta:** `meta`, `reflection`, `goals`

---

## Daily Blog Structure

### Option 1: Project-Focused

```markdown
## What I Built Today

Brief description of what you worked on.

## The Challenge

What problem did you solve? What was tricky?

## Code Snippet

Share a key piece of code you wrote:

\`\`\`javascript
// Your code here
\`\`\`

## What I Learned

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Tomorrow's Plan

What's next?

---

*Built with ❤️ by QQ & Nova ☄️*
```

### Option 2: Learning-Focused

```markdown
## Today's Topic

What did you learn about?

## Key Concepts

1. **Concept 1**: Explanation
2. **Concept 2**: Explanation
3. **Concept 3**: Explanation

## Resources I Used

- [Link 1](url) — Description
- [Link 2](url) — Description

## Application

How will you use this in your projects?

---

*Learning with ❤️ by QQ & Nova ☄️*
```

### Option 3: Reflection/Update

```markdown
## Week in Review

What did you accomplish this week?

## Wins

- ✅ Win 1
- ✅ Win 2
- ✅ Win 3

## Challenges

What was hard? How did you handle it?

## Goals for Next Week

1. Goal 1
2. Goal 2
3. Goal 3

---

*Reflecting with ❤️ by QQ & Nova ☄️*
```

---

## Quick Commands

**Create new post quickly:**

```bash
# Copy template
cp _posts/TEMPLATE.md _posts/$(date +%Y-%m-%d)-my-post.md

# Or create directly
cat > _posts/$(date +%Y-%m-%d)-my-post.md << 'EOF'
---
layout: post
title: "My Post Title"
date: $(date +%Y-%m-%d) 09:00:00 +0800
tags: []
---

Your content here...
EOF
```

**Test locally:**

```bash
bundle exec jekyll serve
# Visit http://localhost:4000/blog/
```

**Push to GitHub:**

```bash
git add _posts/
git commit -m "Add daily blog post: [title]"
git push
```

---

## Tips

1. **Write daily** — consistency > perfection
2. **Include code** — shows what you actually built
3. **Add screenshots** — visual proof of work
4. **Link to live projects** — let readers try it
5. **Tag properly** — helps with organization
6. **End with credits** — "Built with ❤️ by QQ & Nova ☄️"

---

## Example Posts

Check these files for examples:
- `_posts/2026-03-20-pomodoro-timer-pwa.md` — Project-focused
- `_posts/2026-03-19-bug-fixing-marathon.md` — Update/reflection  
- `_posts/2026-03-18-hello-world.md` — Introduction/meta

Happy writing! 📝
