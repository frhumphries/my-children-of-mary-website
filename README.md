# Children of Mary – Netlify Static Site

A clean, modern static recreation of https://www.mychildrenofmary.com/ ready to host on Netlify.

## Features
- Fully static multi-page site (no backend required)
- Beautiful, responsive design with Tailwind CSS (Play CDN)
- Netlify Forms for both **Registration** and **Contact**
- Mobile-friendly navigation
- Marian-themed design (deep blue, clean typography)

## Pages
- `index.html` – Homepage
- `history.html`
- `mission.html`
- `patrons.html`
- `programs.html`
- `devotion.html`
- `register.html` – Membership registration form
- `contact.html` – General contact form

## Deployment to Netlify (Recommended)

1. Push this folder to a GitHub repository.
2. On Netlify:
   - Click **Add new site** → **Import an existing project**
   - Select your repo
   - Leave build settings as default (no build command needed)
   - Deploy

3. After the first successful deploy, go to **Site settings → Forms** and enable form notifications if desired.

## Local Development

Just open any `.html` file in a browser. No build step required.

For a better experience you can use a simple local server:

```bash
npx serve .
```

## Forms

Both forms use Netlify’s built-in form handling:

- **register** form (Join Us)
- **contact** form (Get In Touch)

Submissions will appear in the Netlify dashboard under **Forms**.

## Customization

- Update the email address in `contact.html`
- Replace placeholder content with real text/photos from the original site
- Add your actual logo/favicon in the `<head>`

## License

For use by the Congregation of the Children of Mary. Free to modify and host.