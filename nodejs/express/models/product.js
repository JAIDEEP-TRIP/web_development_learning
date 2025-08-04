const products = [];
const path = require('path');

const fs = require('fs');
module.exports = class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
     save(){
        const p = path.join
        (path.dirname(require.main.filename),
        'data',
        'products.json');
        fs.readFile(p,(err,fileContent)=>{
            let products=[];
            if(!err){
                products = JSON.parse(fileContent);

            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        });
     }

     static  fetchAll() {
         const p = path.join
        (path.dirname(require.main.filename),
        'data',
        'products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                return [];
            }
            return JSON.parse(fileContent)
        })
        return products;
     }



}