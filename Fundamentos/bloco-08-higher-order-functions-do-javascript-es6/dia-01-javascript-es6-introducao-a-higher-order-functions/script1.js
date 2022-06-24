const acordando = () => 'Acordando!!';
const café = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => {
    const result = func();
    console.log(result);
}
doingThings(café);
doingThings(acordando);
doingThings(dormir);
/*----------------------------------------------------------*/
const creatEmail = (fullName) => {
    let email = `${fullName.replace(/ /g, "_")}@trybe.com`
    return {fullName, email}
}

console.log(creatEmail('luiz filipe lima'));

const newEmployees = () => {
    const employees = {
      id1: creatEmail('Pedro Guerra'),
      id2: creatEmail('Luiza Drumond'),
      id3: creatEmail('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees());
  /*--------------------------------------------------------*/

  const verificador = (numRandom, num) => num === numRandom;

  const sorteio = (num, func) => {
      const numRandom = Math.floor((Math.random()*5)+1);

      return func(numRandom, num)? 'Parabéns, você ganhou !': ' Não foi dessa vez';
  }

  console.log(sorteio(2,verificador));

  