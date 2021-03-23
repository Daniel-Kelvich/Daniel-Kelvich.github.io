from flask import Flask, request, send_from_directory, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', message='')

@app.route('/form')
def form():
    return render_template('contacts.html', message='')

if __name__ == "__main__":
    app.run()