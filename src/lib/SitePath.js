import url from 'url';
import path from 'path';

import pkg from '../../package.json';

function generateSitePath(pathname) {
  var siteURL = pkg.homepage;
  var basePath = siteURL ? url.parse(siteURL).pathname : '';
  if (pathname.startsWith(basePath)) {
    return pathname;
  } else {
    return path.normalize(basePath + '/' + pathname);
  }
}

export { generateSitePath };
