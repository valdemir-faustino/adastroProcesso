// enviarFormulario.js

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById("myButton");
    var nameInput = document.getElementById('name');
    var tipoInput = document.getElementById('tipo');
    var descricaotextarea = document.getElementById("descricao");
    var statusInput = document.getElementById('status');
    var origemInput = document.getElementById('origem');
    

  
    button.addEventListener('click', function(event) {
      event.preventDefault();
  
      var formData = {
        name: nameInput.value,
        tipo: tipoInput.value,
        descricao: descricaotextarea.value,
        status: statusInput.value,
        origem: origemInput.value
        
      };
  
      database.ref('formData').push(formData)
        .then(function() {
          console.log('Dados enviados com sucesso para o Firebase!');
        })
        .catch(function(error) {
          console.error('Erro ao enviar dados para o Firebase:', error);
        });
    });
  });
  