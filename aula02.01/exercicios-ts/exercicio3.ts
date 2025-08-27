interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
  }
  
  let meuLivro: Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1954
  };
  
  function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.anoPublicacao}`);
  }
  
  exibirLivro(meuLivro);
  