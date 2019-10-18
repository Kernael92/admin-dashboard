import os
from flask import Flask, send_from_directory 
from flask_pymongo import PyMongo
from pymongo import MongoClient


# def create_app(test_config=None):
# Create and configure the app
app = Flask(__name__,
    instance_relative_config=True,
    static_folder = '../src',
    template_folder="../public" )
app.config.from_mapping(
    SECRET_KEY = 'random-key'
)


test_config=None
app.config['MONGO_URI'] = "mongodb://mongoadmin:password@localhost:27017"
mongo = PyMongo(app)

# Load Configurations from config object which defaults to Development
app.config.from_object(os.getenv('FLASK_ENVIRONMENT', 'config.Development'))
# Create MongoDB connection object using Mongo URI and instatiate DB (ephoenix)
mongo_conn = MongoClient(app.config['MONGO_URI'])
mongo_db = mongo_conn[app.config['DB_NAME']]

test_config=None
if test_config is None:
    # load the instance config, if it exists, when not testing
    app.config.from_pyfile('config.py', silent=True)
else:
    # load the test config if passed in
    app.config.from_object(test_config)

# ensure the instance folder exists
try: 
    os.makedirs(app.instance_path)
except OSError:
    pass


from .utils import db
db.Base


from .content import views

# register the blueprints
app.register_blueprint(views.content, url_prefix="/content")

# serving React App
@app.route('/',defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, 'path')
    else:
        return send_from_directory(app.static_folder, 'app.template_folder')
   
