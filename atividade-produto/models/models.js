const connection = require("../config/db");

const product = {

    getAllProduct: async () =>{
        const [result] = await connection.query("SELECT * FROM produtos")
        .catch(erro => console.log(erro));
        return result;
    },

    getProductById: async (id) => {
        const [result] =  await connection.query("SELECT * FROM produtos WHERE id=?", [id])
        .catch(erro => console.log(erro));
        return result;
    },

    createNewProduct: async(id,productName,price,inputType,yearManufecture) =>{
        const [result] = await connection.query("INSERT INTO produtos values(?,?,?,?,?)",[id,productName,price,inputType,yearManufecture])
        .catch((erro) => console.log(erro));
        return result; 
    },

    updateProductById: async(productName,price,inputType,yearManufecture,id) => {
        const [result] = await connection.query("UPDATE produtos SET productName=?, price=?, inputType=?, yearManufecture=? WHERE id=?", [productName,price,inputType,yearManufecture,id])
        .catch((erro) => console.log(erro))
        return result;
    },

    deleteProduct: async(id) =>{
        const [result] = await connection.query("DELETE FROM produtos WHERE id=?", [id])
        .catch((erro) => console.log(erro))
        return result;
    }
};

module.exports = product;