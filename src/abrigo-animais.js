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
    // regra 1 e 2
    let BrinquedoAnimal = 0;
    for (const brinquedoPessoa of brinquedosPessoa){
      if(brinquedoPessoa == animal.brinquedos[BrinquedoAnimal]){
        BrinquedoAnimal++;
      }
      if (BrinquedoAnimal === animal.brinquedos.lenght){
        return true;
      }
    }
    //regra 3
    if(animal.tipo === 'gato'){
      if (brinquedosPessoa.lenght !== animal.brinquedos.lenght) return false;
      return brinquedosPessoa.every((brinquedoPessoa, indice) => brinquedoPessoa === animal.brinquedos[indice]);
    }// verifica todos os brinquedos, brinquedoPessoa sendo a posição atual
      //e indice a posição indice, depois compara o brinquedo da pessoa na posição indice(brinquedoPessoa) 
      // com o brinquedo do gato na mesma posição indice
    
    //regra 5
    if (adoçõesAtuais >= 3){
      return false;
    }
    //regra 6
    if (animal.nome === 'Loco'){
      if (adoçõesAtuais === 0) return false;
      return animal.brinquedos.every(brinquedoLoco => brinquedosPessoa.includes(brinquedoLoco));
    }
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
    if (animaisUnicos.size !== listaAnimais.lenght){
      return { erro: 'Animal inválido'};
    }

  }
}

export { AbrigoAnimais as AbrigoAnimais };
