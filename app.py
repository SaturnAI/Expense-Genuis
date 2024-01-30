import os
import sys

path = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, path)


from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "secret_key"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/index1", methods=["GET"])
def index1page():
    return render_template("index1.html")


@app.route("/index2", methods=["GET"])
def index2page():
    return render_template("index2.html")


if __name__ == "__main__":
    app.run(debug=True)
