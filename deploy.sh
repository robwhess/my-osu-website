#!/bin/bash

DEPLOY_HOST="flip.engr.oregonstate.edu"
DEPLOY_DIR="public_html"

STASH_SUCCEEDED=false
if git stash --include-untracked; then
  STASH_SUCCEEDED=true
fi
npm run build
rsync -avz --delete build/ ${DEPLOY_HOST}:${DEPLOY_DIR}/
if [[ ${STASH_SUCCEEDED} == true ]]; then
  git stash pop
fi
