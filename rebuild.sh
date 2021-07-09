#!/bin/bash

# Script per il rebuild sulla macchina di developement

# Se ho un docker già aperto lo chiudo
dockerID=$(docker ps -a | grep "invito_amici" | awk '{ print $1; }')
if [[ $dockerID != "" ]]; then
    docker rm -f $dockerID
fi

# Cancello l'immagine
docker image rm akumuyuma/invito_amici

# E la rebuildo
docker build . -t akumuyuma/invito_amici

# Faccio partire il docker
dockerID=$(docker run -d --rm --name invito_amici -p 5000:80 akumuyuma/invito_amici)

# Committo il docker al repo
docker commit $dockerID akumuyuma/invito_amici

# E faccio il push
docker push akumuyuma/invito_amici:latest
