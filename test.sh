#!/bin/sh

C:/casperjs/batchbin/casperjs.bat caspertest.js
compare test-prod.png test-staging.png diff.png

