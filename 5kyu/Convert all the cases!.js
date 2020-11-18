/*
Convert all the cases!

from codewars: https://www.codewars.com/kata/59be8c08bf10a49a240000b1/train/javascript

In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

You must write a function that changes to a given case. It must be able to handle all three case types:

js> changeCase("snakeCase", "snake")
"snake_case"
js> changeCase("some-lisp-name", "camel")
"someLispName"
js> changeCase("map_to_all", "kebab")
"map-to-all"
js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
js> changeCase("invalid-inPut_bad", "kebab")
undefined
js> changeCase("valid-input", "huh???")
undefined
js> changeCase("", "camel")
""
Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.
*/
//Mys solution:

const camelCase = (s) => {
    let cleaned = [];
    if (s.includes("-")) {
      cleaned.push(s.split("-"));
    } else if (s.includes("_")) {
      cleaned.push(s.split("_"));
    } else {
      cleaned.push(s.split(" "));
    }
  
    let flattened = [].concat.apply([], cleaned);
    let res = [];
    res.push(flattened[0]);
    for (let word of flattened.slice(1)) {
      res.push(word[0].toUpperCase() + word.substring(1));
    }
    return res.join("");
  };
  
  const snakeCase = (s) => {
    if(s.includes('_')) return s
    let cleaned2 = [];
    for (let i = 0; i < s.length; i++) {
      //console.log(s[i])
      s[i] === s[i].toUpperCase()
        ? cleaned2.push("_" + s[i].toLowerCase())
        : cleaned2.push(s[i].toLowerCase());
    }
    return cleaned2.join("").split("-").join("");
  };
  
  const kebabCase = (s) => {
    let cleaned3 = [];
    for (let i = 0; i < s.length; i++) {
      s[i] === s[i].toUpperCase()
        ? cleaned3.push("-" + s[i].toLowerCase())
        : cleaned3.push(s[i].toLowerCase());
    }
    return cleaned3.join("").split("_").join("");
  };
  
  const changeCase = (identifier, targetCase) => {
    if (identifier.includes("-") && identifier.includes("_")) {
      return undefined;
    }
    if (
      (identifier.includes("-") || identifier.includes("_")) &&
      identifier !== identifier.toLowerCase()
    ) {
      return undefined;
    }
    if (
      targetCase !== "camel" &&
      targetCase !== "snake" &&
      targetCase !== "kebab"
    )
      return undefined;
    if (targetCase === "camel") return camelCase(identifier);
    if (targetCase === "snake") return snakeCase(identifier);
    if (targetCase === "kebab") return kebabCase(identifier);
  };

  changeCase("some-lisp-name", "camel"); 
  //returns: "someLispName"

