# How to Publish Your Portfolio

Congratulations on building your portfolio! Here are the best free ways to publish it for the world to see.

## Option 1: GitHub Pages (Recommended for Developers)

This method hosts your site on GitHub and gives you a URL like `https://your-username.github.io/portfolio`.

### Prerequisites
- A GitHub account.
- Git installed on your computer.

### Steps
1. **Initialize Git (if not already done)**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a Repo on GitHub**:
   - Go to [github.com/new](https://github.com/new).
   - Name it `portfolio`.
   - Click **Create repository**.

3. **Link your local project**:
   - Copy the commands shown on GitHub (usually starting with `git remote add origin...`).
   - Paste them in your terminal.

4. **Install the deploy tool**:
   In your VS Code terminal, run:
   ```bash
   npm install -g angular-cli-ghpages
   ```

5. **Deploy**:
   Run this command (replace `your-repo-name` if it's not `portfolio`):
   ```bash
   ng build --base-href "https://<your-username>.github.io/portfolio/"
   npx angular-cli-ghpages --dir=dist/portfolio
   ```

6. **Done!**
   Your site will be live at the URL shortly.

---

## Option 2: Netlify (Easiest & Best Performance)

This method requires **no code** to deploy.

### Steps
1. **Build your project**:
   Run this command in your terminal:
   ```bash
   npm run build
   ```
   This creates a `dist/portfolio` folder in your project directory.

2. **Sign up for Netlify**:
   Go to [netlify.com](https://www.netlify.com) and sign up (it's free).

3. **Drag and Drop**:
   - Log in to your Netlify dashboard.
   - Go to the **Sites** tab.
   - You will see a box that says "Drag and drop your site output folder here".
   - Open your file explorer, find the `d:\VILJO\PERSONAL\PORTFOLIO\dist\portfolio` folder.
   - Drag that `portfolio` folder onto the Netlify page.

4. **Done!**
   Netlify will give you a live URL instantly (e.g., `adjective-noun-123.netlify.app`). You can change this name in "Site Settings".

---

## Option 3: Vercel (Great Alternative)

Similar to Netlify.

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```
   Follow the prompts (say Yes to everything).

---

## Option 4: Hostinger (Automatic via GitHub Actions)

This method automatically updates your Hostinger site whenever you push to GitHub.

### Setup Steps
1. **Get FTP Details**:
   - Log in to your Hostinger hPanel.
   - Go to **Files** -> **FTP Accounts**.
   - Note down your FTP IP/Host, Username, and Password.

2. **Add Secrets to GitHub**:
   - Go to your repository on GitHub.
   - Go to **Settings** -> **Secrets and variables** -> **Actions**.
   - Click **New repository secret** and add:
     - `FTP_SERVER`: Your FTP Host/IP.
     - `FTP_USERNAME`: Your FTP Username.
     - `FTP_PASSWORD`: Your FTP Password.

3. **Deploy**:
   - Push your code to the `main` branch.
   - Go to the **Actions** tab in GitHub to see the progress.

---

## Important Tips
- **Resume**: If you have a PDF resume, put it in `src/assets/` and link to it like `<a href="assets/resume.pdf">Download CV</a>`.
- **Custom Domain**: innovative services like Netlify and GitHub Pages allow you to buy and use your own domain (e.g., `viljo.com`).
