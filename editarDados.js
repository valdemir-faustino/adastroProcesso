// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDWVPVMOYLp9wwKJn7Sc_ERFEiORr8B26M",
    authDomain: "fomularioteste-e37bb.firebaseapp.com",
    databaseURL: "https://fomularioteste-e37bb-default-rtdb.firebaseio.com",
    projectId: "fomularioteste-e37bb",
    storageBucket: "fomularioteste-e37bb.appspot.com",
    messagingSenderId: "723794565712",
    appId: "1:723794565712:web:c5ebedf042387f6a89cf55",
    measurementId: "G-XQQZ6080XL"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const form = document.getElementById("editForm");
  const firebaseRef = firebase.database().ref("formData");
  
  // Carregar opções de processos no select
  const processIdSelect = document.getElementById("processId");
  
  firebaseRef.on("value", (snapshot) => {
    processIdSelect.innerHTML = "<option value=''>Selecione</option>";
  
    snapshot.forEach((childSnapshot) => {
      const processId = childSnapshot.key;
      const data = childSnapshot.val();
      const option = document.createElement("option");
      option.value = processId;
      option.text = `${data.id}`; // Exibe o ID junto com o Id
      processIdSelect.appendChild(option);
    });
  });
  
  processIdSelect.addEventListener("change", (event) => {
    const processId = event.target.value;
  
    if (processId) {
      firebaseRef.child(processId).once("value", (snapshot) => {
        const data = snapshot.val();
  
        if (data) {
          document.getElementById("modalidade").value = data.modalidade;
          document.getElementById("objeto").value = data.objeto;
          document.getElementById("status").value = data.status;
          document.getElementById("origem").value = data.origem;
          document.getElementById("publicacao").value = data.publicacao;
          document.getElementById("inicio").value = data.inicio;
          document.getElementById("fim").value = data.fim;
        }
      });
    } else {
      // Limpar os campos se nenhum processo for selecionado
      form.reset();
    }
  });
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const processId = document.getElementById("processId").value;
    const modalidade = document.getElementById("modalidade").value;
    const objeto = document.getElementById("objeto").value;
    const status = document.getElementById("status").value;
    const origem = document.getElementById("origem").value;
    const publicacao = document.getElementById("publicacao").value;
    const inicio = document.getElementById("inicio").value;
    const fim = document.getElementById("fim").value;
  
    const data = {
      modalidade,
      objeto,
      status,
      origem,
      publicacao,
      inicio,
      fim
    };
  
    firebaseRef.child(processId).update(data);
  
    // Redirecionar para a página de exibição de dados
    window.location.href = "exibirDados.html";
  });
  
  
  
  
  
  

  

