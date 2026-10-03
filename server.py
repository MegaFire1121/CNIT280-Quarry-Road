"""Serve the imported static website without exposing workspace files."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent


class WebsiteHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def send_head(self):
        path = unquote(urlsplit(self.path).path)
        relative = path.lstrip("/") or "index.html"
        candidate = (ROOT / relative).resolve()
        allowed = candidate in {ROOT / "index.html", ROOT / "style.css"} or (
            candidate.is_relative_to(ROOT / "images") and candidate.is_file()
        )
        if not allowed:
            self.send_error(404, "File not found")
            return None
        return super().send_head()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    print("Serving website on port 5000", flush=True)
    ThreadingHTTPServer(("0.0.0.0", 5000), WebsiteHandler).serve_forever()