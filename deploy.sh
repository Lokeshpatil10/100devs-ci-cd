#!/bin/bash
set -e

cd /home/ubuntu/100xdevs-ci-cd

git pull origin main
npm install
npm run build

pm2 restart 100xdevs-ci-cd || pm2 start npm --name "100xdevs-ci-cd" -- start
