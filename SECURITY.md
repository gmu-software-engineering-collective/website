# Security Policy

## Reporting a Vulnerability

Do not report security vulnerabilities through public GitHub Issues.

Report suspected vulnerabilities privately to the Software Engineering Collective leadership.

Include, when possible:

- A description of the vulnerability
- Steps to reproduce it
- The affected component
- The potential impact
- Any suggested mitigation

## Secrets and Credentials

Secrets, API keys, passwords, tokens, private keys, and other credentials must never be committed to a repository.

Use environment variables or approved secret-management mechanisms such as GitHub Actions secrets.

If a secret is accidentally committed:

1. Notify a coordinator immediately.
2. Revoke or rotate the exposed credential.
3. Remove the credential from the repository.
4. Document and address the cause of the exposure.

Never assume deleting a secret in a later commit makes the exposed credential safe.
