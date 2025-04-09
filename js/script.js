document.getElementById('form-motorista').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value; 
    const data = document.getElementById('data').value;
    const placa = document.getElementById('placa').value;
    const horaSaida = document.getElementById('horaSaida').value;
    const kmSaida = document.getElementById('kmSaida').value;
    const horaChegada = document.getElementById('horaChegada').value;
    const observacao = document.getElementById('observacao').value;
  
    console.log("Dados do formulário:");
    console.log("Nome do Motorista:", nome);
    console.log("Data:", data);
    console.log("Placa:", placa);
    console.log("Hora de Saída:", horaSaida);
    console.log("KM na Saída:", kmSaida);
    console.log("Hora de Chegada:", horaChegada);
    console.log("Observação:", observacao);
  
    alert("Formulário enviado com sucesso!");
  });
  


  //função de salvar dados no localsto//
  window.addEventListener('DOMContentLoaded', () => {
    const campos = [
      'nome', 'data', 'placa', 'horaSaida', 
      'kmSaida', 'horaChegada', 'observacao'
    ];
  
    // Ajusta data e hora de saída se estiverem vazios
    const now = new Date();
    const brasiliaOffset = -3 * 60;
    const localOffset = now.getTimezoneOffset();
    const brasiliaTime = new Date(now.getTime() + (brasiliaOffset - localOffset) * 60000);
  
    const dataFormatada = brasiliaTime.toISOString().split('T')[0];
    const horas = String(brasiliaTime.getHours()).padStart(2, '0');
    const minutos = String(brasiliaTime.getMinutes()).padStart(2, '0');
    const horaFormatada = `${horas}:${minutos}`;
  
    // Preenche data e hora se estiverem vazias no localStorage
    if (!localStorage.getItem('data')) {
      document.getElementById('data').value = dataFormatada;
    }
    if (!localStorage.getItem('horaSaida')) {
      document.getElementById('horaSaida').value = horaFormatada;
    }
  
    // Carrega os dados salvos no localStorage
    campos.forEach((campo) => {
      const valor = localStorage.getItem(campo);
      if (valor !== null) {
        document.getElementById(campo).value = valor;
      }
  
      // Salva cada campo enquanto o usuário digita
      const elemento = document.getElementById(campo);
      if (elemento) {
        elemento.addEventListener('input', () => {
          localStorage.setItem(campo, elemento.value);
        });
      }
    });
  });
  


  // Evento de envio do formulário
  document.getElementById('form-motorista').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const campos = [
      'nome', 'data', 'placa', 'horaSaida', 
      'kmSaida', 'horaChegada', 'observacao'
    ];
  
    const dados = campos.reduce((obj, campo) => {
      obj[campo] = document.getElementById(campo).value;
      return obj;
    }, {});
  
    // Envia os dados para a API do SheetMonkey
    fetch("https://api.sheetmonkey.io/form/86KtnFe1pxriGhZxRdkvK6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    })
    .then(response => {
      if (response.ok) {
        // Limpa localStorage e o formulário
        campos.forEach((campo) => localStorage.removeItem(campo));
        alert("Formulário enviado com sucesso!");
        document.getElementById('form-motorista').reset();
      } else {
        alert("Erro ao enviar o formulário. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro na requisição:", error);
      alert("Erro ao enviar. Verifique sua conexão.");
    });
  });
  






  


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
  