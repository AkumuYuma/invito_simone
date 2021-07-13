#!/bin/bash

# Script per il rebuild sulla macchina di developement
nomeImmagine="invito_parenti"

# Se ho un docker già aperto lo chiudo
dockerID=$(docker ps -a | grep $nomeImmagine | awk '{ print $1; }')
if [[ $dockerID != "" ]]; then
    docker rm -f $dockerID
fi

# Cancello l'immagine
docker image rm akumuyuma/$nomeImmagine

# E la rebuildo
docker build . -t akumuyuma/$nomeImmagine

# Faccio partire il docker
dockerID=$(docker run -d --rm --name $nomeImmagine)

# Committo il docker al repo
docker commit $dockerID akumuyuma/$nomeImmagine

# E faccio il push
docker push akumuyuma/$nomeImmagine
