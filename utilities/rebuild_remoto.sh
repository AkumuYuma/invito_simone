#!/bin/bash

# Script per aggiornare l'immagine, da far partire sulla macchina remota

# Se ho un docker già aperto lo chiudo
dockerID=$(docker ps -a | grep "invito_amici" | awk '{ print $1; }')
if [[ $dockerID != "" ]]; then
    docker rm -f $dockerID
fi

# Cancello l'immagine
docker image rm akumuyuma/invito_amici

# Faccio ripartire il docker
docker run -d --rm --name sito_amici -p 443:80 akumuyuam/invito_amici
