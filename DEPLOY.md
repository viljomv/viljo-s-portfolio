# How to Publish Your Portfolio

Congratulations on building your portfolio! Here are the best free ways to publish it for the world to see.

## Option 1: GitHub Pages (Recommended for Developers)

This method hosts your site on GitHub and gives you a URL like `https://your-username.github.io/portfolio`.

### Prerequisites
- A GitHub account.
- Git installed on your computer.

### Steps (Automated with GitHub Actions)
1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Wait for Deployment**:
   Go to your GitHub repository and click on the **Actions** tab. You'll see a workflow named "Deploy to GitHub Pages" running.

3. **Verify Settings**:
   Once the action finishes (turns green), go to **Settings** -> **Pages**. Ensure the "Build and deployment" source is set to **gh-pages** branch.

4. **Done!**
   Your site will be live at `https://viljomv.github.io/viljo-s-portfolio/` (or your custom domain if configured).

---

## Option 2: Manual Deployment (Alternative)
...

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

## Option 4: Hostinger (Automatic via GitHub Actions) [READY]

I have set up a workflow that automatically updates your Hostinger site whenever you push to the `main` branch.

### Final Setup Required
1. **Add Secrets to GitHub**:
   - Go to your repository on GitHub.
   - Go to **Settings** -> **Secrets and variables** -> **Actions**.
   - Click **New repository secret** and add:
     - `FTP_SERVER`: Your FTP Host/IP (from Hostinger hPanel).
     - `FTP_USERNAME`: Your FTP Username.
     - `FTP_PASSWORD`: Your FTP Password.

2. **Deploy**:
   - Once secrets are added, any `git push origin main` will trigger the build and upload.
   - Go to the **Actions** tab in GitHub to see the `Deploy to Hostinger` workflow progress.

> [!IMPORTANT]
> Ensure your Hostinger FTP account points to the `public_html` directory or update the `server-dir` in `.github/workflows/deploy-hostinger.yml`.

---

## Important Tips
- **Resume**: If you have a PDF resume, put it in `src/assets/` and link to it like `<a href="assets/resume.pdf">Download CV</a>`.
- **Custom Domain**: innovative services like Netlify and GitHub Pages allow you to buy and use your own domain (e.g., `viljo.com`).
