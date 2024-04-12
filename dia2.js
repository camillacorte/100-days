
let chuvaDeMeteoros = [
   { nome: 'Alfa Centaurídeos',     declinacao: -59 },
   { nome: 'Gama Normídeos',         declinacao: -50 },
   { nome: 'Pi Pupídeos',                    declinacao: -45 },
   { nome: 'Líridas',                     declinacao: 34  },
   { nome: 'Eta Aquáridas',               declinacao: -1  },
   { nome: 'Eta Líridas',           declinacao: 44  },
   { nome: 'Bootídeos de Junho',             declinacao: 48  },
   { nome: 'Alfa Capricornídeos',    declinacao: -10 },
   { nome: 'Delta Aquáridas do Sul', declinacao: -16 },
   { nome: 'Piscis Austrinídeos',             declinacao: -30 },
   { nome: 'Perseidas',              declinacao: 58  },
 ];

 //**separação de chuvas no hemisfério norte e hemisfério sul */

 const chuvasNorte = chuvaDeMeteoros.filter((chuva) => chuva.declinacao >= 0);

 const chuvasSul = chuvaDeMeteoros.filter((chuva) => chuva.declinacao < 0);

 const imprimirChuva = function(chuva) {
    console.log (chuva.nome)
 };

 //**imprimindo as chuvas */

 console.log("CHUVAS NO HEMISFÉRIO NORTE:");
 chuvasNorte.forEach(imprimirChuva);

 console.log("CHUVAS DE METEOROS NO HEMISFÉRIO SUL:");
 chuvasSul.forEach(imprimirChuva);
