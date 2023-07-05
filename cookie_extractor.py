import http.cookiejar
import urllib.request

def extract_cookie(cookie_name, domain_name):
    cookie_jar = http.cookiejar.CookieJar()
    handler = urllib.request.HTTPCookieProcessor(cookie_jar)
    opener = urllib.request.build_opener(handler)
    opener.open(domain_name)
    
    for cookie in cookie_jar:
        if cookie.name == cookie_name and cookie.domain == domain_name:
            return cookie.value

    return None