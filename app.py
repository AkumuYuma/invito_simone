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

# Utilities
@app.route("/nomi")
def nomi():
    """
    Restituisce i nomi come json
    """

    return send_file("dati/nomi.json")
    
@app.route("/conferma/<nome>")
def conferma(nome):
    """
    Aggiorna il file con i nomi dei confermati 
    """
    with open("dati/confermati.txt", "a") as f:
        f.write(nome + "\n")
    
    return f"{nome} confermato"
        

# Lettura
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
@app.route("/immagini/conferma")
def manda_immagine():
    """
    Manda l'immagine finale
    """

    return send_file("media/Page2_DEF.jpg")

@app.route("/immagini/rifiuto")
def manda_rifiuto():
    """
    Manda l'immagini con la linguaccia 
    """
    return send_file("media/rifiuto.gif")


@app.route("/audio/lalaland") 
def manda_audio():
    """
    Manda l'audio di lalaland
    """
    return send_file("media/Lalalaland.mp3")

@app.route("/video/easterEgg")
def manda_video():
    return send_file("media/easterEgg.mp4")


if __name__ == "__main__":
    # Per esporlo alla rete modificare host = "0.0.0.0"
    app.run(host = '0.0.0.0', port= 5000, debug = True)
