# Hilary Ronner, M.D., F.A.C.S. — Website

Personal website for Dr. Hilary Ronner, Pediatric and Adult Ophthalmologist, New York City.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About Dr. Ronner |
| `faqs.html` | FAQs for Patients |
| `contact.html` | Contact |

## Structure

```
/
├── index.html
├── about.html
├── faqs.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Deploying to GitHub Pages

1. **Create a new repository** on GitHub — name it `hilaryronnermd` (or anything you like).

2. **Upload all files** — drag-and-drop the entire folder into the GitHub web interface, or use Git:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_USERNAME/hilaryronnermd.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to **Settings → Pages**
   - Under *Source*, select **Deploy from a branch**
   - Choose **main** branch, **/ (root)** folder
   - Click **Save**

4. The site will be live at `https://YOUR_USERNAME.github.io/hilaryronnermd/` within a few minutes.

## Custom Domain (optional)

To use `hilaryronnermd.com`:
1. Add a `CNAME` file to the repo root containing: `www.hilaryronnermd.com`
2. In your DNS provider, add a CNAME record pointing `www` → `YOUR_USERNAME.github.io`
3. In GitHub Pages Settings, enter the custom domain and enable **Enforce HTTPS**

## Contact Form

The contact form currently simulates a submission (no backend required for GitHub Pages).
To make it functional, sign up for a free [Formspree](https://formspree.io) account and:

1. Create a new form — you'll receive an endpoint like `https://formspree.io/f/XXXXXXXX`
2. In `contact.html`, update the `<form>` tag:
   ```html
   <form class="contact-form" action="https://formspree.io/f/XXXXXXXX" method="POST">
   ```
3. Remove the `e.preventDefault()` line from `js/main.js` (or leave it for AJAX mode)

## Google Maps (Contact page)

The map embed on the contact page uses a placeholder Maps API key. For production:
1. Get a free API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the **Maps Embed API**
3. Replace `AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY` in `contact.html` with your key

Alternatively, replace the `<iframe>` with a simple static map image or a link to Google Maps.

## Fonts

The site uses Google Fonts — **Cormorant Garamond** (display/serif) and **Jost** (sans-serif).
These load from `fonts.googleapis.com`; no extra setup needed.
