 $(document).ready(function(){
var countries ={
    
    "United States" : {
        capital: "Washington D.C",
        animal: "bald Eagle",
        language: "English",
        population: "308,745,538"
        
    },
        
    "Egypt" : {
    capital:"Cairo",
    animal:"Steppe Eagle",
    language:"Arabic",
    population:"92,957,743"
        
    },
    
    "Spain" : {
    capital:"Madrid",
    animal:"Bull",
    language:"Spanish",
    population:"47,846,084"
        
    },
    
    "Italy" : {
    capital:"Rome",
    animal:"Wolf",
    language:"Italian",
    population:"59,800,276"
        
    },
    
    "Brazil" : {
    capital:"Brasília",
    animal:"Jaguar",
    language:"Portuguese",
    population:"209,185,334"
        
    },
    
    "Portugal" : {
    capital:"Lisbon",
    animal:"Iberian wolf",
    language:"Portuguese",
    population:"10 604 294"
        
    }
    
};
  
     $("#click-me").click(function(){
    var choose=$("#Fares").val();
      $("#capital").text(countries[choose].capital);
      $("#animal").text(countries[choose].animal);
      $("#language").text(countries[choose].language);
      $("#population").text(countries[choose].population);
 
   });
});