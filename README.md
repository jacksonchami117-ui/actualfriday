# ActualFriday

A project with comprehensive engineering automation and quality tooling.

## 🚀 Features

This repository is configured with modern DevOps best practices and automation tools:

- **🔄 Dependency Management**: Automated updates with Renovate
- **🔀 Merge Automation**: Queue-based merging with Mergify
- **📝 Release Management**: Automated release notes with Release Drafter
- **📊 Code Coverage**: Coverage reporting with Codecov
- **🔍 Code Quality**: Static analysis with SonarCloud
- **🔒 Security Scanning**: Vulnerability detection with Trivy and Snyk
- **🏷️ Auto-labeling**: Automatic PR labeling based on changed files
- **⚙️ Repository Settings**: Settings-as-code with the Settings app

## 🛠️ Setup Instructions

### 1. Install Required GitHub Apps

Click the links below to install the required GitHub Apps:

- [🔄 Renovate](https://github.com/apps/renovate) - Dependency automation
- [🔀 Mergify](https://github.com/apps/mergify) - Merge queue automation  
- [📊 Codecov](https://github.com/apps/codecov) - Code coverage
- [🔍 SonarCloud](https://github.com/apps/sonarcloud) - Code quality
- [🔒 Trivy Security](https://github.com/apps/trivy-security) - Vulnerability scanning
- [🐍 Snyk](https://github.com/apps/snyk) - Additional security scanning
- [🖼️ Imgbot](https://github.com/apps/imgbot) - Image optimization
- [⚙️ Settings](https://github.com/apps/settings) - Repository settings automation

### 2. Configure Secrets and Variables

Add the following secrets in your repository settings (`Settings > Secrets and variables > Actions`):

#### Required Secrets:
- `SONAR_TOKEN` - Generate at [SonarCloud Security](https://sonarcloud.io/account/security)
- `SONAR_PROJECT_KEY` - Format: `owner_repository` (e.g., `jacksonchami117-ui_actualfriday`)

#### Optional Secrets:
- `CODECOV_TOKEN` - Only needed for private repositories ([Codecov Settings](https://codecov.io))
- `SNYK_TOKEN` - Generate at [Snyk Account Settings](https://app.snyk.io/account)

### 3. Update Configuration

After installation, update the following files with your specific values:

#### SonarCloud Configuration (`sonar-project.properties`):
```properties
sonar.projectKey=your-org_your-repo
sonar.organization=your-org
```

#### Security Contact (`SECURITY.md`):
Replace `[SECURITY_EMAIL_PLACEHOLDER]` with your security contact email.

### 4. Enable Branch Protection

The Settings app will automatically configure branch protection rules when installed. The configuration includes:

- ✅ Require pull request reviews (1 approval)
- ✅ Dismiss stale reviews on new commits
- ✅ Require status checks: `build`, `coverage`, `sonar`, `trivy`
- ✅ Require branches to be up to date before merging
- ✅ Require conversation resolution before merging
- ✅ Auto-delete head branches after merge
- ✅ Squash merge only

## 🔄 Automated Workflows

### Continuous Integration
- **Build**: Runs tests, linting, and builds for Node.js/Python projects
- **Coverage**: Generates and reports test coverage to Codecov
- **SonarCloud**: Performs code quality and security analysis
- **Trivy**: Scans for vulnerabilities in dependencies and containers
- **Snyk**: Additional security scanning (optional)

### Automation
- **Renovate**: Updates dependencies automatically on weekends
- **Mergify**: Auto-merges approved PRs that pass all checks
- **Release Drafter**: Generates release notes based on PR labels
- **Labeler**: Auto-labels PRs based on changed files

### Quality Gates
All PRs must pass:
- ✅ Build and tests
- ✅ Code coverage thresholds (80% project, 70% patch)
- ✅ SonarCloud quality gate
- ✅ Security scans (Trivy)
- ✅ At least 1 review approval

## 📝 Development Workflow

1. **Create a branch** from `main`
2. **Make your changes** following the coding standards
3. **Create a pull request** - it will be automatically labeled
4. **Wait for CI** - all checks must pass
5. **Get review approval** - at least 1 approval required
6. **Auto-merge** - Mergify will automatically merge when conditions are met

## 🏷️ PR Labels

The following labels are automatically applied based on changed files:

- `documentation` - README, docs, markdown files
- `tests` - Test files and specs
- `ci` - GitHub Actions, workflows, CI configuration
- `dependencies` - Package files, lock files
- `config` - Configuration files
- `frontend` - JavaScript, TypeScript, CSS, HTML
- `backend` - Python, Java, Go, etc.
- `docker` - Dockerfile, docker-compose

## 🔒 Security

We take security seriously. Please see our [Security Policy](SECURITY.md) for:
- Supported versions
- How to report vulnerabilities
- Security best practices
- Automated security tools

## 📊 Quality Metrics

- **Coverage Target**: 80% project coverage, 70% patch coverage
- **Code Quality**: SonarCloud quality gate must pass
- **Security**: No high/critical vulnerabilities allowed
- **Dependencies**: Automatically updated and scanned

## 🤝 Contributing

1. Check existing issues and PRs
2. Follow the pull request template
3. Ensure all CI checks pass
4. Get at least one approval
5. Auto-merge will handle the rest!

## 📜 License

[Add your license here]

---

**Note**: This repository template provides a complete CI/CD setup. Customize the configuration files as needed for your specific project requirements.