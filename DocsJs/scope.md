# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement
```js

// Vamos iniciar um bloco
{
  //aqui dentro é um bloco e posso colocar qualquer codigo
} //aqui fechamos o bloco
```

O bloco criará um novo escopo. Chamamos de 
`block-scoped`

## var

```js
//var é global e poderá funcionar fora de um escopo de bloco (e tambem local) hoisting
console.log('> existe x antes do bloco? ', x)

{
  var x = 0
}

console.log('> existe x depois do bloco?', x)
```

## const e let

```js
//const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco? ', y)

{
  let y = 0
}

console.log('> existe y depois do bloco?', y)
```