#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:clang1996/react-demo-1-website.git &&
git push -u origin master -f
cd -
