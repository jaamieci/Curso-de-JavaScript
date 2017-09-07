'use strict';

/*var cat = {
    name: 'Fluffy',
    color: 'White'
}*/

/*cat['Eye Color'] = 'Green'
display(cat['Eye Color'])
display(cat)*/

//Imprimiendo el descriptor de propiedades del objeto
//display(Object.getOwnPropertyDescriptor(cat, 'name'))

//Redefiniendo la propiedad descriptiva writable a false de la propiedad name de cat
//Object.defineProperty(cat, 'name', {writable: false})
//cat.name = 'Scratchy' //No se podrá setear el nombre del objeto cat
//display(Object.getOwnPropertyDescriptor(cat, 'name'))

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

cat.name.first = 'Scratchy'

Object.defineProperty(cat, 'name', {writable: false})
//display(Object.getOwnPropertyDescriptor(cat, 'name'))
display(cat.name)