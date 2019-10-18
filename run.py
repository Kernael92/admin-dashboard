import os
from app import app

# Load Configurations from config object which defaults to Development
app.config.from_object(os.getenv('FLASK_ENVIRONMENT', 'config.Development'))
app.run()