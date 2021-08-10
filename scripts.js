//Object

// const person = {
//   name: 'Priscila',
  // age: 28,
  // weight: 78.7,
  // isAdmin: true
// }
// 
// console.log(person.age)

//Array
// const animals = [
  // 'lion',
  // 'dog',
  // 'mouse',
  // 'rabbit',
  // {
    // name: 'cat',
    // age: 13
  // }
// ]
// 
// como acessar valores dentro de um array
// console.log(animals)

//1.declare uma variavel de nome weight 
// var weight 

//2.qual tipo de dado variavel acima
// console.log(typeof weight)

/*
  3. Declare uma variavel e atribua valores para cada um dos dados:
    * name: string
    * age: number (integer)
    * stars: number (float)
    * isSubscribed: Boolean
*/
// let name = 'Priscila'
// let age = 28
// let stars = 9.7
// let isSubscribed = true

/* 4. A variavel student abaixo de que tipos de dado?
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3

    4.2 Mostre no console a seguinte mensagem
    <name> de idade <age> pesa <weight> kg

    Atencao, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto


*/

let student = {

   name : "Pri",
   age : 28,
   stars : 9.7,
   isSubscribed : true,
   weight : 76.3

}
console.log(`${student.name} tem  ${student.age} anos e ${student.weight}`)
