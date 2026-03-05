import urllib.request
import urllib.error
import re
import sys

def download_file_from_google_drive(id, destination):
    URL = "https://docs.google.com/uc?export=download"

    import requests
    session = requests.Session()

    response = session.get(URL, params={'id': id}, stream=True)
    for key, value in response.cookies.items():
        if key.startswith('download_warning'):
            response = session.get(URL, params={'id': id, 'confirm': value}, stream=True)
            break
            
    with open(destination, "wb") as f:
        for chunk in response.iter_content(32768):
            if chunk:
                f.write(chunk)

download_file_from_google_drive(sys.argv[1], sys.argv[2])
