#!/usr/bin/env sh

git submodule update --init --recursive

cd prisma
./start.sh
cd ..

npm install
npm start
