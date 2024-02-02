const productModel = require("../models/models");

const productController = {

    getAllProduct: async (req, res) => {
        try {
            const product = await productModel.getAllProduct()
            res.status(200).json(product)
        }
        catch (erro) {
            res.status(500).json({ msg: "Erro ao obter lista de produtos" })
        }
    },

    getById: async (req, res) => {
        try {
            const sql = await productModel.getProductById(req.params.id)

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else {
                res.status(404).json({ msg: 'O produto não foi encontrado' })
            }
        }
        catch (erro) {
            console.log(erro)
            if (erro) {
                res.status(500).json({ msg: 'Erro no servidor ' + erro })
            }
        }
    },

    updateProduct: async (req, res) => {
        const{productName,price,inputType,yearManufecture} = req.body

        console.log(req.body)

        try {
            const sql = await productModel.getProductById(req.params.id)

            if (sql.length > 0) {
                await productModel.updateProductById(productName,price,inputType,yearManufecture,req.params.id);
                res.status(200).json({ msg: "Atualizado com sucesso" })
                console.log(sql)
            }
            else {
                res.status(401).json({ msg: "O ID não existe no banco de dados" })
            }
        }
        catch (erro) {
            console.log(erro)
            if (erro) {
                res.status(500).json({ msg: "Erro no servidor " + erro })
            }
        }
    },

    deleteProducts: async (req, res) => {
        try {
            const sql = await productModel.getProductById(req.params.id)

            if (sql.length > 0) {
                await productModel.deleteProduct(req.params.id);
                res.status(200).send('Excluído com sucesso')
            }
            else {
                res.status(400).json({ msg: "O ID não existe no banco de dados" })
            }
        }
        catch (erro) {
            console.log(erro)
            if (erro) {
                res.status(500).json({ msg: "Erro no servidor" + erro })
            }
        }
    },
    getRoot: async (req, res) => {
        res.status(200).json({ msg: "A API está em execução" })
    },

    createProduct: async (req, res) => {
        const{id,productName,price,inputType,yearManufecture} = req.body

        try {
            const sql = await productModel.getProductById(id);

            if (sql.length > 0) {
                res.status(401).json({ msg: "ID já cadastrado" })
            }
            else {
                const newProduct = await productModel.createNewProduct(id,productName,price,inputType,yearManufecture)
                res.status(201).json({ msg: "Registrado com sucesso" })
            }
        }
        catch (erro) {
            console.log(erro)
            if (erro) {
                res.status(500).json({ msg: erro })
            }
        }
    }
}

module.exports = productController;