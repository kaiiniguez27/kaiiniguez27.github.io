# Kai Iniguez Engineering Portfolio

A no-build static website ready for GitHub Pages. It is intentionally one small project: edit the text or replace project visuals without needing React, a paid host, or a deployment workflow.

## Before publishing

1. In `index.html`, replace every `YOUR_EMAIL_HERE`, `YOUR_LINKEDIN`, and `YOUR_GITHUB` placeholder.
2. Put your current resume at `assets/Kai-Iniguez-Resume.pdf`. The existing resume link will work automatically.
3. For each project, replace the dark/diagram-style visual with an HFSS render or plot when you have one. Put images in `assets/` and use an `<img>` inside the corresponding `.project-visual` container.
4. Update project descriptions only with results you can substantiate. This first version deliberately avoids invented gain, bandwidth, or efficiency numbers.

## Publish with GitHub Pages

1. Create a GitHub repository named `kaiiniguez.github.io` (replace `kaiiniguez` with your actual GitHub username if different).
2. Upload the **contents** of this folder—the files `index.html`, `style.css`, `script.js`, and `assets/` should be at the repository root.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/(root)`.
4. After GitHub publishes it, your site will be at `https://YOUR_GITHUB_USERNAME.github.io`.

## Best project page formula

For each important project, use this sequence:

1. Goal and constraints
2. Your specific contribution
3. Design approach and key decisions
4. 3–6 selected figures (not every raw plot)
5. Results and next iteration

When you have several good projects, the next improvement should be separate detail pages for each project—not adding more effects to the homepage.
