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
      var nameCell = document.createElement("td");
      nameCell.textContent = childData.name;
      var tipoCell = document.createElement("td");
      tipoCell.textContent = childData.tipo;
      var descricaoCell = document.createElement("td");
      descricaoCell.textContent = childData.descricao;
      var statusCell = document.createElement("td");
      statusCell.textContent = childData.status;
      var origemCell = document.createElement("td");
      origemCell.textContent = childData.origem;

      // Adicionar as células à linha
      newRow.appendChild(nameCell);
      newRow.appendChild(tipoCell);
      newRow.appendChild(descricaoCell);
      newRow.appendChild(statusCell);
      newRow.appendChild(origemCell);

      // Adicionar a linha ao corpo da tabela
      dataList.appendChild(newRow);
    });
  });
}








