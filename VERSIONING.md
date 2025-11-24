# Versioning Guide

## Quick Start

### Bump Version Automatically (Recommended)

Analyzes your commits since the last tag and determines the version bump:

```bash
npm run release
```

This will:
1. Analyze commits (feat = minor, fix = patch, BREAKING CHANGE = major)
2. Update `package.json` version
3. Generate/update `CHANGELOG.md`
4. Create a git commit
5. Create a git tag (e.g., `v0.0.2`)

### Manual Version Bump

Force a specific version bump:

```bash
npm run release:patch  # 0.0.1 → 0.0.2
npm run release:minor  # 0.0.1 → 0.1.0
npm run release:major  # 0.0.1 → 1.0.0
```

### Push to Deploy

After running a release command:

```bash
git push --follow-tags origin master
```

This will:
- Push the version commit
- Push the git tag
- Trigger GitHub Actions to build and deploy
- Watchtower will update your site automatically

---

## Commit Message Format

Use **Conventional Commits** for automatic version detection:

```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

### Examples

**Patch (0.0.1 → 0.0.2):**
```bash
git commit -m "fix: correct contact form validation"
```

**Minor (0.0.1 → 0.1.0):**
```bash
git commit -m "feat: add new blog post filtering"
```

**Major (0.0.1 → 1.0.0):**
```bash
git commit -m "feat!: redesign entire homepage

BREAKING CHANGE: old homepage layout removed"
```

### Commit Types

- `feat:` - New feature (minor bump)
- `fix:` - Bug fix (patch bump)
- `docs:` - Documentation only
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Adding tests
- `chore:` - Maintenance tasks
- `ci:` - CI/CD changes

---

## Workflow Example

```bash
# 1. Make changes and commit with conventional format
git add .
git commit -m "feat: add dark mode toggle"

# 2. Make more changes
git add .
git commit -m "fix: resolve mobile menu bug"

# 3. Ready to release? Run versioning
npm run release

# 4. Review the changes (CHANGELOG.md, package.json)
git log -1

# 5. Push to deploy
git push --follow-tags origin master
```

---

## Version Display

The version is automatically displayed in the footer of your website as:

```
v0.0.2
```

It reads directly from `package.json`, so it updates automatically when you deploy.

---

## Dry Run (Test Before Committing)

Test what would happen without making changes:

```bash
npm run release -- --dry-run
npm run release:patch -- --dry-run
```

---

## First Release

If this is your first release after setup:

```bash
npm run release -- --first-release
```

This creates the initial tag without bumping the version.
