/*
 * This function tests whether a URL represents an exsternal link or an
 * internal link.  Returns true if the specified `url` represents an external
 * link or false if it represents an internal link.
 *
 * H/T Daniyal Hamid: https://www.designcise.com/web/tutorial/how-to-check-if-a-string-url-refers-to-an-external-link-using-javascript
 */
export default function isExternalLink(url) {
  const tmp = document.createElement('a');
  tmp.href = url;
  return tmp.host !== window.location.host;
};
