const axios = require('axios');

const fs = require('fs').promises;

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

    .then((response) => {

        console.log('Successfully retrieved our list of Bitcoin');     

        var datos = response.data.bpi

        var type_money = ["EUR","USD","GBP"] 

        var valores = []

        type_money.forEach(money =>{

            var linea = " "+ money + ": "+ datos[money].rate.toString()

            valores.push(linea)

        })   
        var salida = ["Valor actualizado del Bitcoin \n"]

       console.log(salida[0])       

       valores.forEach(v =>{

           console.log(v)

            salida.push(v.toString()+"\n")

        })

       fs.writeFile("Valor bitcoin.txt",salida,(errores)=>{

           console.log(errores)

       })

    })