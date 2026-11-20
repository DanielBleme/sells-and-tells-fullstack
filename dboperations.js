var config = require('./dbconfig');
const sql = require('mssql');
const Produto = require('./Produto');

async function getProduto() {
    try {
        let pool = await sql.connect(config);
        let Produtos = await pool.request().query("SELECT * FROM Produto");
        return Produtos.recordset;
    }
    catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

async function updateProduto(Prod) {
    try {
        let pool = await sql.connect(config);
        let Produto = await pool.request()
            
            .input('id', sql.Int, Prod.id)
            .input('Nome', sql.VarChar, Prod.Nome)
            .input('Preco', sql.Decimal, Prod.Preco)
            .input('Descricao', sql.VarChar, Prod.Descricao)
            .input('Quantidade', sql.Int, Prod.Quantidade)
            .input('Avaliacao', sql.Decimal, Prod.Avaliacao)
            .input('Categoria', sql.VarChar, Prod.Categoria)
            .input('Imagem', sql.VarChar, Prod.Imagem)
            
            .query(`UPDATE [dbo].[Produto]
            SET
            [Nome] = @Nome,
            [Preco] = @Preco,
            [Descricao] = @Descricao,
            [Quantidade] = @Quantidade,
            [Avaliacao] = @Avaliacao,
            [Categoria] = @Categoria,
            [Imagem] = @Imagem
            WHERE [id] = @id`);
            
        return Produto.recordset;
    }
    catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

async function getProdutoById(Produtoid) {
    try {
        let pool = await sql.connect(config);
        let Produtos = await pool.request() 
            .input('input_parameter', sql.Int, Produtoid)
            .query("SELECT * FROM Produto WHERE id = @input_parameter");
        return Produtos.recordset;
    }
    catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
}

async function DeleteProduto(Produtoid) {
    try {
        let pool = await sql.connect(config);
        let Produtos = await pool.request() 
            .input('input_parameter', sql.Int, Produtoid)
            .query("DELETE FROM [dbo].[Produto] WHERE id = @input_parameter");
        return Produtos.recordset;
    }
    catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

async function addProduto(Prod) {
    try {
        let pool = await sql.connect(config);
        let Produtos = await pool.request() 
            
            .input('id', sql.Int, Prod.id)
            .input('Nome', sql.VarChar, Prod.Nome)
            .input('Preco', sql.Decimal, Prod.Preco)
            .input('Descricao', sql.VarChar, Prod.Descricao)
            .input('Quantidade', sql.Int, Prod.Quantidade)
            .input('Avaliacao', sql.Decimal, Prod.Avaliacao)
            .input('Categoria', sql.VarChar, Prod.Categoria)
            .input('Imagem', sql.VarChar, Prod.Imagem)
            // Usando o @ para chamar as variáveis
            .query(`INSERT INTO [dbo].[Produto]
            (
            [id],
            [Nome],
            [Preco],
            [Descricao],
            [Quantidade],
            [Avaliacao],
            [Categoria],
            [Imagem]
            ) VALUES
            (
            @id,
            @Nome,
            @Preco,
            @Descricao,
            @Quantidade,
            @Avaliacao,
            @Categoria,
            @Imagem
            )`);
            
        return Produtos.recordset;
    }
    catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
}


module.exports = {
    getProduto: getProduto,
    updateProduto: updateProduto, 
    getProdutoById: getProdutoById,
    DeleteProduto: DeleteProduto,
    addProduto: addProduto        
};