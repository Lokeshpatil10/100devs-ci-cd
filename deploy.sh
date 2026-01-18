#!/bin/bash
set -e

cd 100devs-ci-cd

git pull origin main
npm install
npm run build

pm2 restart 100devs-ci-cd || pm2 start npm --name "100devs-ci-cd" -- start
