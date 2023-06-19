C=open
import http.server,socketserver as B,webbrowser as D
A=6969
class E(http.server.SimpleHTTPRequestHandler):
	def do_GET(A):
		E='rb';D='Content-type'
		if A.path.endswith('.html'):
			A.send_response(200);A.send_header(D,'text/html');A.end_headers()
			with C(A.path[1:],E)as B:A.wfile.write(B.read())
		elif A.path.endswith('.css'):
			A.send_response(200);A.send_header(D,'text/css');A.end_headers()
			with C(A.path[1:],E)as B:A.wfile.write(B.read())
		elif A.path.endswith('.js'):
			A.send_response(200);A.send_header(D,'application/javascript');A.end_headers()
			with C(A.path[1:],E)as B:A.wfile.write(B.read())
		else:super().do_GET()
with B.TCPServer(('',A),E)as F:D.open(f"http://localhost:{A}");F.serve_forever()