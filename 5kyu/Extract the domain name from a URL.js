
/*
Extract the domain name from a URL

from codewars: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/
//My solution:

const domainName = (url) => {
    if (url.indexOf("http") == -1 && url.indexOf("www") == -1) {
       return url.split(".")[0];
    }else if(url.indexOf(".")==11  && url.indexOf('3')!=10 || url.indexOf("www") == 0 ||url.indexOf(".")==10  )
     { return url.split(".")[1].split(".")[0];
      } else {
       return url.split(".")[0].split("//")[1];
     }
   };



