#!/bin/bash

studentNo=201914006

time=`date +"%H%M"`
fileName=s${studentNo}-${time}.tgz

tar cvzf ${fileName} --exclude="node_modules" --exclude="*.tgz" *
