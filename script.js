const motoristas = {
    motorista1: {
      nome: "Mateus ",
      senha: "senha",
      imagem: "img/WhatsApp Image 2024-11-21 at 10.13.56.jpeg"
    },
    motorista2: {
      nome: "Felipe",
      senha: "abc456",
      imagem: "img/free-photo-of-retrato-de-homem-em-estudio-com-iluminacao-dramatica.jpeg"
    },
    motorista3: {
      nome: "Jonas",
      senha: "minhasenha",
      imagem: "img/free-photo-of-atencao-perfume.jpeg"
    }
  };
  
  let motoristaAtual = null;
  
  function mostrarLista() {
    document.getElementById('lista-motoristas').style.display = 'block';
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('erro-senha').textContent = '';
  }
  
  function mostrarLogin(id) {
    motoristaAtual = id;
    const motorista = motoristas[id];
  
    document.getElementById('lista-motoristas').style.display = 'none';
    document.getElementById('login-area').style.display = 'block';
    document.getElementById('foto-motorista').src = motorista.imagem;
    document.getElementById('senha').value = '';
    document.getElementById('erro-senha').textContent = '';
  }
  
  function verificarSenha() {
    const senhaDigitada = document.getElementById('senha').value;
    const senhaCorreta = motoristas[motoristaAtual].senha;
  
    if (senhaDigitada === senhaCorreta) {
      window.location.href = 'index.html';
    } else {
      document.getElementById('erro-senha').textContent = 'Senha incorreta!';
    }
  }
  function verificarSenha() {
    const senhaDigitada = document.getElementById('senha').value;
    const motorista = motoristas[motoristaAtual];
  
    if (senhaDigitada === motorista.senha) {
      // Salvando dados no localStorage
      localStorage.setItem("motoristaNome", motorista.nome);
      localStorage.setItem("motoristaImagem", motorista.imagem);
  
      window.location.href = 'index.html';
    } else {
      document.getElementById('erro-senha').textContent = 'Senha incorreta!';
    }
  }
  











  function mostrarMotoristas() {
    const lista = document.getElementById("lista-motoristas");
    lista.style.display = "block";
    lista.classList.add("fade-in"); // isso já chama a animação definida
  }
  
  
 // Função para bloquear F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
 document.addEventListener('keydown', function (e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
      alert("Ação bloqueada!");
      return false;
    }
  });
  
  // Bloquear clique com botão direito
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Função desabilitada!");
  });
  