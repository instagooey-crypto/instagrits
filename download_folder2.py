import urllib.request
import re
import sys
import os

def download_folder(folder_id, destination):
    os.system(f"python3 -m pip install gdown")
    os.system(f"python3 -m gdown --folder https://drive.google.com/drive/folders/{folder_id} -O {destination}")

download_folder(sys.argv[1], sys.argv[2])
