function mensagem() {
    var nome = document.getElementById("username").value;
    alert("Bem Vindo, " + nome);
    nome.indexOf("Bem Vindo");
  }
  
  //Botao iniciar
  /*let escondeDiv = document.querySelector(".escondeDiv");
  
  function clickBotaoIniciar() {
    escondeDiv.style.display = "none";
  }
  escondeDiv.addEventListener("click", clickBotaoIniciar);*/
  
  //resposta 1
  function verResultado1() {
    if (
      document.querySelector("input[name=grupopergunta1]:checked").value == "b"
    ) {
      alert("Resposta certa, são 8 temporadas");
    } else {
      alert("Hmm, reposta errada. Tente novamente");
    }
  }
  let botao1 = document.getElementById("resposta1");
  botao1.addEventListener("click", verResultado1);
  
  //reposta 2
  function verResultado2() {
    if (
      document.querySelector("input[name=grupopergunta2]:checked").value == "b"
    ) {
      alert("Resposta certa, é a Rosa");
    } else {
      alert("Hmm, reposta errada. Tente novamente");
    }
  }
  let botao2 = document.getElementById("resposta2");
  botao2.addEventListener("click", verResultado2);
  
  //resultado 3
  function verResultado3() {
    if (
      document.querySelector("input[name=grupopergunta3]:checked").value == "a"
    ) {
      alert("Resposta certa,é o cheddar");
    } else {
      alert("Hm, resposta errada. Tente novamente");
    }
  }
  let botao3 = document.getElementById("resposta3");
  botao3.addEventListener("click", verResultado3);
  