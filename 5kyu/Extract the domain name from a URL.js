
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

   domainName('http://www.uthdbrx93iddfy2lg-w4-ega6f.co')
   domainName('https://123.net')
   domainName('xhpp09i26cm.edu')
   domainName("www.xakep.ru")
   domainName("http://google.com")
   domainName('https://www.60h6d96xinocar1k.co.uk/users')
   domainName('ishok6dgyd8v49gn5-3.co.uk') 

