import urllib.request
import re
import sys
import os

def download_folder(folder_id, destination):
    URL = "https://docs.google.com/uc?export=download"

    import requests
    from bs4 import BeautifulSoup
    import zipfile
    import io
    
    # We will use gdown to download folders as it handles the API better
    os.system(f"pip install gdown")
    os.system(f"gdown --folder https://drive.google.com/drive/folders/{folder_id} -O {destination}")

download_folder(sys.argv[1], sys.argv[2])
