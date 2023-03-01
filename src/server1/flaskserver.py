from flask import Flask, jsonify, request, app, send_file
from flask_cors import CORS
import os
from io import BytesIO


from werkzeug.utils import secure_filename
import PIL as Image
compress_image = __import__('compress').compress_image
uploads = os.path.join(os.getcwd(), 'uploaded_image')



app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return jsonify(message="Server Working")

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'success': False})
    else:
        file = request.files['file']
        file.save(os.path.join('uploaded_image', "image.jpg"))

        # Do something with the file
        return jsonify({'success': True})


@app.route('/download', methods=['POST'])
def download():
    file = request.files['image']
    image = Image.open(file.stream)

    # Compress the image here
    compressed_image = image.convert('RGB').resize((800, 600)).save(BytesIO(), format='JPEG', optimize=True, quality=85)

    # Return the compressed image as a response
    return send_file(BytesIO(compressed_image), attachment_filename='compressed_image.jpg', mimetype='image/jpeg')

@app.route('/compress', methods=['POST'])
def compress():
    if 'file' not in request.files:
        return jsonify({'success': False})
    else:
        file = request.files['file']
        compress_image(file)
        # Do something with the file
        return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True,port=5000)
