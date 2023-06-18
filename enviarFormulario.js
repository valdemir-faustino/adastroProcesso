document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById("myButton");
  var idInput = document.getElementById('id');
  var modalidadeInput = document.getElementById('modalidade');
  var objetoInput = document.getElementById('objeto');
  var statusInput = document.getElementById('status');
  var origemInput = document.getElementById('origem');
  var publicacaoInput = document.getElementById('publicacao');
  var inicioInput = document.getElementById('inicio');
  var fimInput = document.getElementById('fim');

  button.addEventListener('click', function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    var modalidade = modalidadeInput.value;
    var objeto = objetoInput.value;
    var status = statusInput.value;
    var origem = origemInput.value;
    var publicacao = publicacaoInput.value;
    var inicio = inicioInput.value;
    var fim = fimInput.value;

    // Validar os campos
    if (modalidade === "" || objeto === "" || status === "" || origem === "" || publicacao === "" || inicio === "" || fim === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Obter a referência do nó 'formData' no Firebase
    var formDataRef = database.ref('formData');

    // Obter o último ID cadastrado no banco de dados
    formDataRef
      .orderByChild('id')
      .limitToLast(1)
      .once('value', function(snapshot) {
        var lastId = 0;
        snapshot.forEach(function(childSnapshot) {
          lastId = childSnapshot.val().id;
        });

        // Gerar o novo ID autoincrementado
        var newId = lastId + 1;

        // Criar o objeto de dados a ser enviado ao Firebase
        var formData = {
          id: newId,
          modalidade: modalidade,
          objeto: objeto,
          status: status,
          origem: origem,
          publicacao: publicacao,
          inicio: inicio,
          fim: fim
        };

        // Enviar os dados para o Firebase
        formDataRef
          .push(formData)
          .then(function() {
            alert('Dados cadastrados com sucesso!');
            console.log('Dados enviados com sucesso para o Firebase!');
          })
          .catch(function(error) {
            console.error('Erro ao enviar dados para o Firebase:', error);
          });

        // Limpar os campos após o envio
        idInput.value = '';
        modalidadeInput.value = '';
        objetoInput.value = '';
        statusInput.value = '';
        origemInput.value = '';
        publicacaoInput.value = '';
        inicioInput.value = '';
        fimInput.value = '';
      });
  });
});







