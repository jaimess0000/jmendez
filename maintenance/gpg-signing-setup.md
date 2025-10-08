# Git Commit Signing Setup Guide

## Current Issue
Git commit signing is failing with the error:
```
error: gpg failed to sign the data:
gpg: skipped "jaime mendez <jaimess0000@gmail.com>": No secret key
```

## Implementation Plan

### 1. GPG Key Setup
1. Check for existing GPG keys:
   ```bash
   gpg --list-secret-keys --keyid-format LONG
   ```

2. Generate a new GPG key if none exists:
   ```bash
   gpg --full-generate-key
   ```
   - Choose RSA and RSA
   - Set key size to 4096 bits
   - Set expiration as needed
   - Enter user details matching Git email

### 2. Git Configuration
1. Get the GPG key ID:
   ```bash
   gpg --list-secret-keys --keyid-format LONG
   ```

2. Configure Git to use the GPG key:
   ```bash
   git config --global user.signingkey <YOUR-GPG-KEY-ID>
   git config --global commit.gpgsign true
   ```

3. Export the public key for GitHub/GitLab:
   ```bash
   gpg --armor --export <YOUR-GPG-KEY-ID>
   ```

### 3. System Configuration
1. Ensure GPG Agent is running:
   ```bash
   gpg-agent --daemon
   ```

2. Set GPG_TTY environment variable:
   ```bash
   echo "export GPG_TTY=$(tty)" >> ~/.bashrc
   ```

## Backup and Recovery
1. Export private key:
   ```bash
   gpg --export-secret-keys --armor <YOUR-GPG-KEY-ID> > private-key-backup.asc
   ```

2. Store backup securely in a password manager or secure location

## Testing
1. Create a test commit:
   ```bash
   git commit -S -m "Test signed commit"
   ```

2. Verify the signature:
   ```bash
   git verify-commit HEAD
   ```

## Troubleshooting
- If signing fails, check:
  1. GPG key existence and validity
  2. Git email matches GPG key email
  3. GPG agent is running
  4. Correct key ID in Git config