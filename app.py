from flask import render_template, Flask, send_file
from flask_cors import CORS
import json

# Creo l'istanza dell'applicazione
# La specification_dir indica dove trovare il file swagger
app = Flask(__name__)
CORS(app)

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

@app.route("/variabili")
def variabili():
    """
    Manda le variabili di enviroment come porta e host
    """
    return send_file("dati/variabili.json") 

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
    
@app.route("/immagine")
def manda_immagine():
    """
    Manda l'immagine finale
    """

    return send_file("media/Page2_DEF.jpg")



if __name__ == "__main__":
    # Per esporlo alla rete modificare host = "0.0.0.0"
    app.run(host = '0.0.0.0', port= 5000, debug = True)
