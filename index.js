'use strict'
const{graphql,buildSchema}=require('graphql')
const schema=buildSchema(`
  type Query {
    hello: String,
    saludo: String
  }
`)

// resolve

const resolvers = {
  hello: () => {
    return "Hola Mundo"
  },
  saludo: () => {
    return "Hola a todos"
  }
}



graphql(schema,'{ saludo }', resolvers).then((data)=>{console.log(data)})
