// Função para buscar e exibir os dados do Firebase
function exibirDadosDoFirebase() {
  // Limpar o corpo da tabela
  dataList.innerHTML = "";

  // Referência ao nó "formData" no banco de dados
  var formDataRef = database.ref("formData");

  // Evento "value" para buscar os dados
  formDataRef.on("value", function(snapshot) {
    // Iterar sobre os dados do snapshot
    snapshot.forEach(function(childSnapshot) {
      // Obter os dados de cada filho
      var childData = childSnapshot.val();

      // Criar uma nova linha na tabela
      var newRow = document.createElement("tr");

      // Criar células de dados para cada valor
      var idCell = document.createElement("td");
      idCell.textContent = childData.id;
      var modalidadeCell = document.createElement("td");
      modalidadeCell.textContent = childData.modalidade;
      var objetoCell = document.createElement("td");
      objetoCell.textContent = childData.objeto;
      var statusCell = document.createElement("td");
      statusCell.textContent = childData.status;
      var origemCell = document.createElement("td");
      origemCell.textContent = childData.origem;
      var publicacaoCell = document.createElement("td");
      publicacaoCell.textContent = childData.publicacao;
      var inicioCell = document.createElement("td");
      inicioCell.textContent = childData.inicio;
      var fimCell = document.createElement("td");
      fimCell.textContent = childData.fim;

      // Adicionar as células à linha
      newRow.appendChild(idCell);
      newRow.appendChild(modalidadeCell);
      newRow.appendChild(objetoCell);
      newRow.appendChild(statusCell);
      newRow.appendChild(origemCell);
      newRow.appendChild(publicacaoCell);
      newRow.appendChild(inicioCell);
      newRow.appendChild(fimCell);

      // Adicionar a linha ao corpo da tabela
      dataList.appendChild(newRow);
    });
  });
}












