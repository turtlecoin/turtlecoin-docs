#!/usr/bin/env bash
set -euox pipefail

git remote add origin-wiki https://$GITHUB_API_KEY@github.com/turtlecoin/turtlecoin-docs.wiki.git
git remote add project-wiki https://$GITHUB_API_KEY@github.com/turtlecoin/turtlecoin.wiki.git
git push --force origin-wiki HEAD:master
git push --force project-wiki HEAD:master

echo "Deployed to wiki"
