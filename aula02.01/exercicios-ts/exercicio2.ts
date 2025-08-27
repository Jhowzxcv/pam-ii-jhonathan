let cidades: string[] = ["São Paulo", "Rio de Janeiro", "Curitiba", "Recife", "Salvador"];

function listarCidades(lista: string[]): void {
  lista.forEach(cidade => console.log(cidade));
}

listarCidades(cidades);
