# kaiiniguez27.github.io

Kai Iniguez's portfolio. Plain HTML and CSS, no build step: edit a file, push, and GitHub Pages updates the live site at https://kaiiniguez27.github.io within a minute or two.

## Layout

```
index.html                 home page: intro, projects, experience, skills, contact
projects/*.html            one page per project
css/style.css              all styling; colors and fonts are at the top
assets/vna.svg             the animated network-analyzer trace in the header
assets/img/                project images (labeled placeholders until replaced)
assets/Kai-Iniguez-Resume.pdf
.nojekyll                  tells GitHub to serve the files as-is
```

## Common edits

**Replace a placeholder image.** Each gray box says what belongs there and its file name. Put your image in `assets/img/` (for example `array-pattern.png`) and change the matching `src` in the HTML. Export at about 1600 px wide and keep each file under ~500 KB.

**Add results.** In-progress project pages have a "Results" section and an HTML comment showing where numbers go. Add them as `<ul class="numbers"><li><strong>12.4 dBi</strong>peak gain</li></ul>`.

**Add a project.** Copy a page in `projects/`, then copy one `<a class="project">` block in `index.html` and point it at the new page. Update the Previous/Next links on the neighbouring pages.

**Update the résumé.** Replace `assets/Kai-Iniguez-Resume.pdf`, keeping the same file name.
