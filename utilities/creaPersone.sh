#!/bin/bash

filePath=../src/nomi.json

echo -n "{ \"nomi\": [" > $filePath
for i in {1..100}; do
    nome="persona"
    echo -n "\"persona"$i"\"," >> $filePath
done
echo -n "\"persona100\"" >> $filePath
echo "]}" >> $filePath
