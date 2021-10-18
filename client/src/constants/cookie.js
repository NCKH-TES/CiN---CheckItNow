export function getCookie(cName) {
  const name = cName + '=';
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

export function removeItem(sKey, sPath, sDomain) {
  document.cookie =
    encodeURIComponent(sKey) +
    '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
    (sDomain ? '; domain=' + sDomain : '') +
    (sPath ? '; path=' + sPath : '');
}
