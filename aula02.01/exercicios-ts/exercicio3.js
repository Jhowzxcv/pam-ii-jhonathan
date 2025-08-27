var meuLivro = {
    titulo: "O Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1954
};
function exibirLivro(livro) {
    console.log("T\u00EDtulo: ".concat(livro.titulo, ", Autor: ").concat(livro.autor, ", Ano: ").concat(livro.anoPublicacao));
}
exibirLivro(meuLivro);
