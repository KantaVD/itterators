colors = ["yellow", "blue", "red", "orange"]
let number = 0;

while (colors[number]) {
    console.log (colors[number]);
    number++;
};

for (aantal = 0; aantal < (colors.length) ; aantal++) {
    console.log (colors[aantal]);
};

colors.forEach(color => console.log (color));


/*
1:  while loop 3, eigenlijk 4 regels
    for loop 2 regels 
2:  foreach kost maar 1 regel
3:  de foreach  is makkelijker leesbaar en je hoeft geen rekening te houden met de++ zodat de loop stopt.
4:  ja, want je logt elke keer de volgende propertie van het object tot er geen properties meer zijn.
*/

const Kanta = {
    leeftijd: 40,
    lengte: 175,
    achternaam: "Veltman",
    aantalKinderen: 4,
    echtgenoot: "Arthur",
};

for (const [key, value] of Object.entries(Kanta)) {
    console.log (key + ": " + value);
  };