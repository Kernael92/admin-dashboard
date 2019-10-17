import os


# Create configurations for Development and production
class Config(object):
    APP_ROOT = os.path.dirname(os.path.abspath(__file__))
    SECRET_KEY = os.getenv('SECRET_KEY', 'random-key')
    ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx','jpeg','png','gif','jpg']
    ALLOWED_VIDEO_EXTENSIONS = ['mp4','webm','ogg']
    ALLOWED_MIME_TYPES = ['video/mp4', 'video/webm', 'video/ogg']
    UPLOAD_FOLDER = ['UPLOAD_FOLDER']
    MAX_CONTENT_LENGTH = 50 * 1024 * 1024

class Development(Config):
    DEBUG = True
    DB_HOST = os.getenv('DB_HOST', '0.0.0.0')
    DB_USER = os.getenv('DB_USER', 'mongoadmin')
    DB_PASSWORD = os.getenv('DB_PASSWORD', 'password')
    DB_PORT = os.getenv('DB_PORT', 27017)
    DB_NAME = os.getenv('DB_NAME', 'ephoenix')
    MONGO_URI = f'''mongodb://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}'''


class Production(Config):
    DEBUG = False
    DB_HOST = os.getenv('DB_HOST', '0.0.0.0')
    DB_USER = os.getenv('DB_USER', 'productionadmin')
    DB_PASSWORD = os.getenv('DB_PASSWORD', 'p@ssword')
    DB_PORT = os.getenv('DB_PORT', 27017)
    DB_NAME = os.getenv('DB_NAME', 'ephoenix')
    MONGO_URI = f'''mongodb://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}'''



