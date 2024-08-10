import flask
from flask import Flask,redirect,request
import pymongo
from pymongo import MongoClient
from datetime import datetime
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address




uri = "mongodb://jan:kochler@kochserver03:27017/?authSource=admin&readPreference=secondary&directConnection=true&ssl=false"
client = MongoClient(uri)
app = Flask("blurtrAPIv1")

limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

db = client.blurtr1
users = db.users

@app.route("/api/createaccount", methods=["POST"])
@limiter.limit("5 per hour")
def mkaccount():
    username = request.form.get('username')
    password = request.form.get('password')
    user = {
        'username': str(username),
        'displayname': str(password),
        'password': 'bread',
        'timestamp': datetime.now()
    }
    users.insert_one(user)
    all_users = users.find()
    for user in all_users:
        print(user)
    return "user creation successful"

@app.route("/api/auth", methods=["GET"])
def auth():
    return




app.run("0.0.0.0",4242)