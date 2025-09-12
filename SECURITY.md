# Security Policy

## Supported Versions

We take security seriously and recommend using the latest version of our software.

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |
| main    | :white_check_mark: |

## Reporting a Vulnerability

We appreciate your efforts to responsibly disclose any security vulnerabilities you find.

### Where to Report

Please **DO NOT** report security vulnerabilities through public GitHub issues.

Instead, please report security vulnerabilities by emailing: **[SECURITY_EMAIL_PLACEHOLDER]**

### What to Include

Please include the following information in your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### Response Timeline

We'll acknowledge your email within 48 hours, and will send a more detailed response within 96 hours indicating the next steps in handling your report.

### Disclosure Policy

- We will investigate and validate the security issue
- We will work on a fix and release timeline
- We will notify you when the issue is fixed
- We will publicly disclose the issue after a fix is available (coordinated disclosure)

### Comments on This Policy

If you have suggestions on how this process could be improved, please submit a pull request or email us at the address above.

## Security Best Practices

For users of this project:

- Always use the latest version
- Keep dependencies up to date (we use Renovate for automated updates)
- Report any suspected security issues promptly
- Follow secure coding practices when contributing

## Automated Security

This repository uses several automated security tools:

- **Trivy**: Vulnerability scanning for dependencies and containers
- **Snyk**: Additional dependency vulnerability scanning
- **SonarCloud**: Code quality and security analysis
- **Renovate**: Automated dependency updates

These tools help us maintain security, but don't replace responsible disclosure of issues you might find.