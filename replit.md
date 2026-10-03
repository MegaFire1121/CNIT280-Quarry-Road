# Running the imported website

This is a static XHTML/CSS website. Keep its existing root-level structure:
`index.html`, `style.css`, and `images/`. The original design and content are
unchanged.

Use Replit's **Run** button to start the **Start application** workflow, or run:

```sh
python3 server.py
```

The server listens on `0.0.0.0:5000` for Replit Preview. It uses only Python's
standard library; no third-party packages, secrets, or external services are
required. It serves only the website and images, not workspace configuration
files. Browser caching is disabled so edits appear on refresh.

Navigation links in the imported template are placeholders; this setup does not
add pages or login functionality.