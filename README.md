# My OSU Website

This repo contains the implementation of my OSU website.  It was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app).

If you want to run this site locally, you should install the dependencies:
```
npm install
```
Then, you can run it:
```
npm start
```

You'll then be able to visit the site in your browser.  As it's currently set up, the site will be available at http://localhost:3000/~hessro/.  However, if you make any of the changes described below to deploy the site to your own ENGR webspace, the URL on `localhost` will change correspondingly.

## Deploying

This site is designed to be deployed to the ENGR webspace at Oregon State University.  If you want to modify it and deploy to your own webspace on ENGR, there are a few small changes you'll need to make.

1. First, you'll have to update the `homepage` entry in `package.json` to point to your own site:
  ```
  "homepage": "http://web.engr.oregonstate.edu/~YOUR_ENGR_USERNAME/",
  ```
  You can also deploy to a subdirectory of your webspace, e.g. for testing:
  ```
  "homepage": "http://web.engr.oregonstate.edu/~YOUR_ENGR_USERNAME/some/subdirectory/",
  ```

  Note that if you want to deploy to a subdirectory, you'll have to modify `scripts.deploy` in `package.json` as well so that the built code is uploaded to the right place:
  ```
  "scripts": {
    ...
    "deploy": "npm run build && rsync -avz build/ flip.engr.oregonstate.edu:public_html/some/subdirectory/"
    ...
  }
  ```

2. Next, you'll have to edit the `RewriteRule` in `public/.htaccess` to mirror the change you made in `package.json`:
  ```
  RewriteRule ^ /~YOUR_ENGR_USERNAME/index.html [QSA,L]
  ```
  or
  ```
  RewriteRule ^ /~YOUR_ENGR_USERNAME/some/subdirectory/index.html [QSA,L]
  ```
  This is needed so that the Apache server that runs the ENGR webspace allows this site to handle its own routing.  In particular, when the server sees a URL related to this site that it doesn't recognize, the `RewriteRule` above tells it to just respond with this site's `index.html`, which contains the entire site and will handle routing the specified URL.

After you've made those changes, you can deploy like this:
```
npm run deploy
```

## Using Yarn

[Yarn](https://yarnpkg.com/en/) is nice.  It's a little faster than npm because it uses caching and parallelization.  If you want to use Yarn instead of npm, the commands above become these:
```
yarn install
yarn start
yarn deploy
```
