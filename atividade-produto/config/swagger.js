/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
/**
 * @swagger
 * tags:
 *   - name: Produtos
 *     description: Operações relacionadas aos Produtos
 */
/**
 * @swagger
 * /api/employe:
 *   get:
 *     summary: Retorna todos os Produtos
 *     responses:
 *       '200':
 *         description: Sucesso
 *   post:
 *     summary: Adiciona um novo Produto
 *     responses:
 *       '201':
 *         description: Produto criado com sucesso
 */
/**
 * @swagger
 * /api/employe/{id}:
 *   get:
 *     summary: Retorna um Produto específico pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Produto
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso
 *   put:
 *     summary: Atualiza os dados de um Produto
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Produto
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Sucesso
 *     404:
 *      description: CPF não existe na base de dados    
 *      
 * 
 *   delete:
 *     summary: Deleta um Produto pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do Produto
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Produto deletado com sucesso
 */
