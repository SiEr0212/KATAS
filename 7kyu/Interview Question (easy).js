function getStrings(city){
 let newS=[]
 newS.push(city.toLowerCase().split("").filter(function(x, n, self) {
   console.log(n)
   return self.indexOf(x) == n 
  }).join(""))
  
 for(let char of city){
   
   //console.log(newS)
 }
 //let newS1 = newS.join('').toLowerCase()
 return newS.join(' :*,')+':*'
}

getStrings("Chicago");
//"c:**,h:*,i:*,a:*,g:*,o:*");
getStrings("Bangkok");
//"b:*,a:*,n:*,g:*,k:**,o:*");
 //getStrings("Las Vegas"), //"l:*,a:**,s:**,v:*,e:*,g:*");
 