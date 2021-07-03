from flask import render_template, Flask, send_file
from flask_cors import CORS

# Creo l'istanza dell'applicazione
# La specification_dir indica dove trovare il file swagger
app = Flask(__name__)
CORS(app)

# Base per "/" dell'applicazione
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/nomi")
def nomi():
    """

    Questa funzione restituisce i nomi come json

    """

    return send_file("dati/nomi.json")

@app.route("/matrix")
def matrix():
    return render_template("matrix.html")

@app.route("/scritta_finale")
def scritta_finale():
    return render_template("scritta_finale.html")


if __name__ == "__main__":
    # Per esporlo alla rete modificare host = "0.0.0.0"
    app.run(host = '0.0.0.0', port= 3000, debug = True)
