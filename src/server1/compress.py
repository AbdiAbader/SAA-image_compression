#!/usr/bin/env python3
from PIL import Image
from io import BytesIO
from flask import send_file
import datetime
# Load the image
def compress_image(file):
    
  
    input_image = Image.open(file)
    compressed = input_image.save(BytesIO(), format='JPEG',optimize=True, quality=50)

    return send_file(BytesIO(compressed), attachment_filename='compressed_image.jpg', mimetype='image/jpeg')