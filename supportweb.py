#!/usr/bin/env python
from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.errorhandler(404)
def page_not_found(error):
   return "dayum"

@app.route('/')
def index():
    return 'SupportWeb'

@app.route('/user/<string:user_id>')
def event_page(user_id):
    return render_template("index.html", user_id=user_id)
    
if __name__ == "__main__":
    app.run(debug=True)
