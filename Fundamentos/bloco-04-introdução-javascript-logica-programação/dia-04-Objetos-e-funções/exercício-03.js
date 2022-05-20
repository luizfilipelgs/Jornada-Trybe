let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem-vinda " + info.personagem)
  console.log("---------------------------------------");

  info.recorrente = "sim"

  console.log(info);

  for (const key in info) {
      console.log(info[key]);
      
  }

  console.log("---------------------------------------");

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178' ,
    nota: 'O último MacPatinhas',
  };
  console.log("Bem-vindo " + info2.personagem)
  console.log("---------------------------------------");

  info2.recorrente = "sim"

  console.log(info2);


  console.log("---------------------------------------");
    
    for (let key in info2) {
            if (info[key] !== info2[key]) {
                console.log( info[key] + " e " + info2[key] );
            } else {
                console.log("Ambos recorrentes");
            }
    }
    console.log("---------------------------------------");

  
   

