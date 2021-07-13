#!/bin/bash

# Script per aggiornare l'immagine, da far partire sulla macchina remota
nomeImmagine="invito_parenti"

# Se ho un docker già aperto lo chiudo
dockerID=$(docker ps -a | grep $nomeImmagine | awk '{ print $1; }')
if [[ $dockerID != "" ]]; then
    docker rm -f $dockerID
fi

# Cancello l'immagine
docker image rm akumuyuma/$nomeImmagine

# Faccio ripartire il docker
docker run -d --rm --name sito_amici -p 443:80 akumuyuma/$nomeImmagine
