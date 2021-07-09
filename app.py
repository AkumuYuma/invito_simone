from flask import render_template, Flask, send_file
from flask_cors import CORS
import json

# Creo l'istanza dell'applicazione
# La specification_dir indica dove trovare il file swagger
app = Flask(__name__)
CORS(app)

# Templates
# Base per "/" dell'applicazione
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/matrix")
def matrix():
    return render_template("matrix.html")

@app.route("/scritta_finale")
def scritta_finale():
    return render_template("scritta_finale.html")

@app.route("/finito")
def finito():
    return render_template("finito.html") 


# Conferma 
@app.route("/conferma/<nome>")
def conferma(nome):
    """
    Aggiorna il file con i nomi dei confermati 
    """
    with open("dati/confermati.txt", "a") as f:
        f.write(nome + "\n")
    
    return f"{nome} confermato"
        

# Lettura
@app.route("/read/nomi")
def nomi():
    """
    Restituisce i nomi come json
    """

    return send_file("dati/nomi.json")

@app.route("/read/confermati")
def leggi_conferme():
    """
    Restituisce le conferme come json
    """
    nomi = []
    with open("dati/confermati.txt", "r") as f: 
        for nome in f:
            nomi.append(nome.strip("\n"))
     
    return json.JSONEncoder().encode(nomi)

# Delete
@app.route("/cancella/confermati")
def cancella_confermati(): 
    """
    Resetta la lista dei confermati 
    """
    with open("dati/confermati.txt", "w") as f:
       f.write("")
    return "Cancellati tutti"

# Media
@app.route("/media/<nome>")
def manda_media(nome):
    """
    Manda il media passato nell'url
    """
    return send_file("media/" + nome)


if __name__ == "__main__":
    # Per esporlo alla rete modificare host = "0.0.0.0"
    app.run(host = '0.0.0.0', port= 5000, debug = True)
