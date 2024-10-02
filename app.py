from flask import Flask
from routes import api_routes

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/msme_credit_db'

# Register routes
app.register_blueprint(api_routes)

if __name__ == '__main__':
    app.run(debug=True)