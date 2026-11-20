class Produto{
    constructor(id, Nome, Preco, Descricao, Quantidade, Avaliacao, Categoria, Imagem) {
        this.id = id;
        this.nome = Nome;
        this.descricao = Descricao;
        this.preco = Preco;
        this.quantidade = Quantidade;
        this.avaliacao = Avaliacao;
        this.categoria = Categoria;
        this.Imagem = Imagem;
    }
}

module.exports = Produto;