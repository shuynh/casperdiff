#!/bin/sh

C:/casperjs/batchbin/casperjs.bat test tests/
compare screenshots/test-prod.png screenshots/test-staging.png diffs/diff.png
compare screenshots/deal-prod.png screenshots/deal-staging.png diffs/diff-deal.png


