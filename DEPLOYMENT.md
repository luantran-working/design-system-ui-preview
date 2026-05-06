# 🚀 Deployment Guide

This guide will help you deploy Design System UI Preview to GitHub Pages.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- Your repository pushed to GitHub

## 🌐 Deploy to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

#### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Click **Save**

#### Step 2: Push Your Code

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

#### Step 3: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/design-system-ui-preview
   ```

### Method 2: Manual Deployment

If you prefer manual deployment:

1. Go to **Settings** → **Pages**
2. Under **Source**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**
4. Wait 1-2 minutes for deployment
5. Your site will be live at the same URL

## 🔗 Update README with Live Demo Link

After deployment, update your README.md:

1. Find this line:
   ```markdown
   [🌐 Live Demo](https://YOUR_USERNAME.github.io/design-system-ui-preview)
   ```

2. Replace `YOUR_USERNAME` with your actual GitHub username:
   ```markdown
   [🌐 Live Demo](https://yourusername.github.io/design-system-ui-preview)
   ```

3. Commit and push:
   ```bash
   git add README.md
   git commit -m "Update live demo link"
   git push origin main
   ```

## 🎯 Custom Domain (Optional)

If you want to use a custom domain:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `design-systems.yourdomain.com`)
3. Click **Save**
4. Add a CNAME record in your DNS settings:
   ```
   CNAME: design-systems
   Value: YOUR_USERNAME.github.io
   ```
5. Wait for DNS propagation (can take up to 24 hours)

## 🔍 Verify Deployment

After deployment, verify everything works:

- [ ] Website loads correctly
- [ ] All design systems are visible in the sidebar
- [ ] Search functionality works
- [ ] Menu navigation works (click different systems)
- [ ] Landing pages load properly
- [ ] Copy Markdown button works
- [ ] Responsive design works on mobile

## 🐛 Troubleshooting

### Site Not Loading

**Problem:** 404 error or blank page

**Solutions:**
1. Check if GitHub Pages is enabled in Settings
2. Verify the workflow completed successfully in Actions tab
3. Wait a few more minutes (initial deployment can take up to 10 minutes)
4. Clear your browser cache

### Workflow Failed

**Problem:** GitHub Actions workflow shows error

**Solutions:**
1. Check the workflow logs in Actions tab
2. Verify you have Pages enabled in repository settings
3. Make sure the repository is public (or you have GitHub Pro for private repos)
4. Re-run the workflow from Actions tab

### Assets Not Loading

**Problem:** CSS/JS files not loading, broken images

**Solutions:**
1. Check if all files are committed and pushed
2. Verify file paths are relative (not absolute)
3. Check browser console for 404 errors
4. Ensure file names match exactly (case-sensitive)

### Design Systems Not Showing

**Problem:** Sidebar is empty or systems don't load

**Solutions:**
1. Check if `js/systems.js` is present
2. Verify `design-systems/` folder is committed
3. Check browser console for JavaScript errors
4. Test locally first before deploying

## 📊 Monitoring

### View Deployment Status

1. Go to **Actions** tab
2. Click on the latest workflow run
3. View logs and deployment status

### View Site Analytics (Optional)

Add Google Analytics or other analytics:

1. Create an analytics account
2. Add tracking code to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🔄 Update Deployment

To update your live site:

1. Make changes locally
2. Test changes by opening `index.html` in browser
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```
4. GitHub Actions will automatically redeploy
5. Wait 1-2 minutes for changes to appear

## 🎉 Success!

Your Design System UI Preview is now live and accessible to everyone!

Share your link:
- Add it to your GitHub profile
- Share on social media
- Add to your portfolio
- Submit to design system directories

## 📞 Need Help?

- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Open an [Issue](../../issues) in this repository
- Check existing issues for solutions

---

**Happy Deploying! 🚀**
