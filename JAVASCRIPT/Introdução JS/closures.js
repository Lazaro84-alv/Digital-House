function saudaco(nome){
      let mensagem = "Olá sea bem vindo";

      function juntarNome() {
            return mensagem + ' ' + nome;
      }

      return juntarNome();
}

console.log(saudacao("Lázaro"));