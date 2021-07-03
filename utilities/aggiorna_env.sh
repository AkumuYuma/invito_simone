#!/bin/bash

HOST=$(hostname -I | grep -P -o "^\d+\.\d+\.\d+\.\d+")
PORT=$(netstat -tunlp | grep LISTEN | grep python | grep -o -P ":\d+" | sed 's/://')
filepath=../dati/variabili.json

echo "{ "  > $filepath
echo "\"host\": \""$HOST"\"," >> $filepath
echo "\"porta\": \""$PORT"\"" >> $filepath
echo "}" >> $filepath
