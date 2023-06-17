import http.server, socketserver, webbrowser
port = 6969
class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.endswith(".html"):
            self.send_response(200)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            with open(self.path[1:], "rb") as file:
                self.wfile.write(file.read())
        elif self.path.endswith(".css"):
            
            self.send_response(200)
            self.send_header("Content-type", "text/css")
            self.end_headers()
            with open(self.path[1:], "rb") as file:
                self.wfile.write(file.read())
        elif self.path.endswith(".js"):
            
            self.send_response(200)
            self.send_header("Content-type", "application/javascript")
            self.end_headers()
            with open(self.path[1:], "rb") as file:
                self.wfile.write(file.read())
        else:
            super().do_GET()
with socketserver.TCPServer(("", port), CustomHandler) as httpd:
    print(f"Server running on port {port}")
    webbrowser.open(f"http://localhost:{port}")
    httpd.serve_forever()