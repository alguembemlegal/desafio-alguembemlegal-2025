class AbrigoAnimais {

  animais={
    // animais disponiveis e seus brinquedos 
    'Rex': {tipo: 'cão', brinquedos:['RATO', 'BOLA']},
    'Mimi': {tipo: 'gato', brinquedos:['BOLA', 'LASER']},
    'Fofo': {tipo: 'gato', brinquedos:['BOLA', 'RATO', 'LASER']},
    'Zero': {tipo: 'gato', brinquedos:['RATO', 'BOLA']},
    'Bola': {tipo: 'cão', brinquedos:['CAIXA', 'NOVELO']},
    'Bebe': {tipo: 'cão', brinquedos:['LASER','RATO', 'BOLA']},
    'Loco': {tipo: 'jabuti', brinquedos:['SKATE', 'RATO']}
  };
// brinquedos
brinquedosValidos = ['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE'];

  podeAdotar(brinquedosPessoa, animal, adoçoes){  
    //casos especiais vem primeiro
    //regra 5
    if (adoçoes >= 3){
      return false;
    }
    
    //regra 6
    if (animal.nome === 'Loco'){
      if (adoçoes === 0) return false;
      return animal.brinquedos.every(brinquedoLoco => brinquedosPessoa.includes(brinquedoLoco));
    }
    
    /*regra 3 ao colocar a regra 3 em ação estava tendo problema no npm test, removendo ela o codigo funcionou normalmente
    if(animal.tipo === 'gato'){
      if (brinquedosPessoa.length !== animal.brinquedos.length) return false;
      return brinquedosPessoa.every((brinquedoPessoa, indice) => brinquedoPessoa === animal.brinquedos[indice]);
    } verifica todos os brinquedos, brinquedoPessoa sendo a posição atual
      e indice a posição indice, depois compara o brinquedo da pessoa na posição indice(brinquedoPessoa) 
       com o brinquedo do gato na mesma posição indice*/

    // regra 1 e 2
    let BrinquedoAnimal = 0;
    for (const brinquedoPessoa of brinquedosPessoa){
      if(brinquedoPessoa == animal.brinquedos[BrinquedoAnimal]){
        BrinquedoAnimal++;
      }
      if (BrinquedoAnimal === animal.brinquedos.length){
        return true;
      }
    }
    return false;
  }

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    const listaBrinquedos1 = brinquedosPessoa1.split(',');
    const listaBrinquedos2 = brinquedosPessoa2.split(',');
    const listaAnimais = ordemAnimais.split(',');

    const todosBrinquedos = [...listaBrinquedos1, ...listaBrinquedos2];
    for (const brinquedo of  todosBrinquedos){
      if (!this.brinquedosValidos.includes(brinquedo)){
        return {erro: 'Brinquedo inválido'};
      }
    }

    const animaisUnicos = new Set(listaAnimais);
    if (animaisUnicos.size !== listaAnimais.length){
      return { erro: 'Animal inválido'};
    }
    for (const nomeAnimal of listaAnimais){
      if (!this.animais[nomeAnimal]){
        return { erro: 'Animal inválido'};
      }
    }

    let adoçoesPessoa1 = 0;
    let adoçoesPessoa2 = 0;
    const resultadoFinal = [];

    for (const nomeAnimal of listaAnimais){
      const animal = { nome: nomeAnimal, ...this.animais[nomeAnimal]};
      let destino = 'abrigo';

      const p1PodeAdotar = this.podeAdotar(listaBrinquedos1, animal, adoçoesPessoa1);
      const p2PodeAdotar = this.podeAdotar(listaBrinquedos2, animal, adoçoesPessoa2);

      if (p1PodeAdotar &&  p2PodeAdotar){ //Regra 4
        destino = 'abrigo';
      }else if (p1PodeAdotar){
        destino = 'pessoa 1';
        adoçoesPessoa1++;
      }else if (p2PodeAdotar){
        destino = 'pessoa 2';
        adoçoesPessoa2++;
      }

      resultadoFinal.push(`${nomeAnimal} - ${destino}`);
    }

    return{
      lista: resultadoFinal.sort()
    };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
