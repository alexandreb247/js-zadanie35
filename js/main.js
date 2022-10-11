function dowolnaLiczba(n){
    n = Math.floor(Math.random()*300);    
    if (n>=100 && n<201) {
        return console.log("Wylosowana liczba: " +n, "znajduje się w przedziale");
   } else {
       return console.log("Wylosowana liczba: " +n, "nie znajduje się w przedziale");
  }
 }

dowolnaLiczba();
dowolnaLiczba();
dowolnaLiczba();
dowolnaLiczba();
dowolnaLiczba();