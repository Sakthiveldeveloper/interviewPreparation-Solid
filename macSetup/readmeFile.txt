# 🍎 Mac Development Setup Guide

> Personal Mac setup guide for React, Node.js, Full Stack Development
>
> Device: MacBook Air M5 (Apple Silicon)
> Author: Sakthivel A

---

# Table of Contents

1. Homebrew
2. Git
3. GitHub SSH Setup
4. NVM
5. Node.js
6. pnpm
7. Cursor IDE
8. MySQL
9. MySQL Workbench
10. Verification Commands
11. Recommended Tools
12. Troubleshooting

---

# 1. Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

If `brew` is not found after installation:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Verify

```bash
brew --version
```

---

# 2. Install Git

```bash
brew install git
```

Verify

```bash
git --version
```

Configure Git

```bash
git config --global user.name "Sakthivel A"

git config --global user.email "sakthivel24498@gmail.com"
```

Verify

```bash
git config --list
```

Expected

```
user.name=Sakthivel A
user.email=sakthivel24498@gmail.com
```

---

# 3. GitHub SSH Setup

Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "sakthivel24498@gmail.com"
```

Start SSH Agent

```bash
eval "$(ssh-agent -s)"
```

Add Key

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Copy Public Key

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

GitHub

```
Settings
    ↓
SSH and GPG Keys
    ↓
New SSH Key
```

Paste the copied key.

Test

```bash
ssh -T git@github.com
```

Expected

```
Hi <github_username>!
You've successfully authenticated.
```

---

# 4. Install NVM

Install

```bash
brew install nvm
```

Create directory

```bash
mkdir -p ~/.nvm
```

Configure

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc

echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc

echo '[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"' >> ~/.zshrc
```

Reload Terminal

```bash
source ~/.zshrc
```

Verify

```bash
nvm --version
```

---

# 5. Install Node.js

View available versions

```bash
nvm ls-remote
```

Install Node 22

```bash
nvm install 22
```

Verify

```bash
node -v

npm -v

nvm ls
```

---

# 6. Install pnpm

```bash
npm install -g pnpm
```

Verify

```bash
pnpm -v
```

---

# 7. Install Cursor

```bash
brew install --cask cursor
```

Open

```bash
open -a Cursor
```

Open current project

```bash
cursor .
```

If macOS asks

```
Cursor is an app downloaded from the Internet
```

Click

```
Open
```

---

# 8. Install MySQL

Install

```bash
brew install mysql
```

Start Service

```bash
brew services start mysql
```

Verify

```bash
brew services list
```

Login

```bash
mysql -u root -p
```

---

# 9. Install MySQL Workbench

```bash
brew install --cask mysqlworkbench
```

Open

```bash
open -a "MySQL Workbench"
```

---

# 10. Verification

```bash
brew --version

git --version

git config --list

ssh -T git@github.com

nvm --version

node -v

npm -v

pnpm -v

mysql --version

brew services list

cursor --version
```

---

# 11. Recommended Tools

VS Code

```bash
brew install --cask visual-studio-code
```

Docker Desktop

```bash
brew install --cask docker
```

Postman

```bash
brew install --cask postman
```

Redis

```bash
brew install redis
```

PostgreSQL

```bash
brew install postgresql
```

wget

```bash
brew install wget
```

jq

```bash
brew install jq
```

tree

```bash
brew install tree
```

watchman

```bash
brew install watchman
```

---

# 12. Git Workflow

Clone

```bash
git clone git@github.com:<username>/<repo>.git
```

Open

```bash
cd <repo>
```

Create Branch

```bash
git checkout -b feature_name
```

Status

```bash
git status
```

Stage

```bash
git add .
```

Commit

```bash
git commit -m "Your Message"
```

Push

```bash
git push -u origin feature_name
```

---

# Common Issues

### brew command not found

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### nvm command not found

```bash
source ~/.zshrc
```

### SSH Authentication Failed

```bash
ssh -T git@github.com
```

### Verify Node

```bash
node -v

npm -v
```

### Verify Git

```bash
git --version
```

---

# Future Setup

- Docker
- Kubernetes
- AWS CLI
- Terraform
- Java
- Maven
- Gradle
- Redis
- MongoDB
- Android Studio
- Xcode
- IntelliJ IDEA

---

# Author

**Sakthivel A**

Full Stack Developer

React • Node.js • JavaScript • TypeScript • Express • MySQL • MongoDB • Docker