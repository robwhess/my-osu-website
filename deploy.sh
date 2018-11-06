#!/bin/bash

DEPLOY_USERNAME="hessro"
DEPLOY_HOST="flip.engr.oregonstate.edu"
DEPLOY_DEST_DIR="public_html"
DEPLOY_SRC_DIR="build"
DEPLOY_BRANCH="master"

# Only deploy from master branch.
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ ${CURRENT_BRANCH} == ${DEPLOY_BRANCH} ]]; then
	STASH_SUCCEEDED=false
	if ! git stash --include-untracked | grep "No local changes to save"; then
	  STASH_SUCCEEDED=true
	fi
	npm run build
	rsync -avz --delete ${DEPLOY_SRC_DIR}/ ${DEPLOY_USERNAME}@${DEPLOY_HOST}:${DEPLOY_DEST_DIR}/
	if [[ ${STASH_SUCCEEDED} == true ]]; then
	  git stash pop
	fi
fi
