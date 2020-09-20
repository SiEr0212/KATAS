
/*

*/


const domainName = (url) => {
  if (url.indexOf("http") == -1 && url.indexOf("www") == -1) {
    return url.split(".")[0];
  } else if (
    (url.indexOf(".") == 11 && url.indexOf("3") != 10) ||
    url.indexOf("www") == 0 ||
    url.indexOf(".") == 10
  ) {
    return url.split(".")[1].split(".")[0];
  } else {
    return url.split(".")[0].split("//")[1];
  }
};
