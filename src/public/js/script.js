function coleta() {
    // Define a função chamada 'coleta'.
    // Esta função é chamada quando um evento, como o clique em um botão de envio, ocorre.
 
    // event.preventDefault(); // impede o envio do fomr
    // Normalmente, essa linha impediria o envio do formulário, mas está comentada, então não faz nada.
 
     var form = document.getElementById('formulario');
     // Obtém uma referência ao elemento de formulário no documento HTML com o atributo 'id' igual a 'formulario'
     // e armazena essa referência na variável 'form'.
 
     var formData = new FormData(form);
     // Cria um objeto 'FormData' chamado 'formData' para coletar os dados do formulário 'form'.
 
     var res = document.getElementById('res');
     // Obtém uma referência ao elemento no documento HTML com o atributo 'id' igual a 'res'
     // e armazena essa referência na variável 'res'.
 
     var info = "Nome: " + formData.get('fname') + "\nEmail: " + formData.get('fmail') + "\nTelefone: " + formData.get('ftel');
     // Cria uma string 'info' que contém informações coletadas do formulário.
     // Obtém os valores dos campos de entrada com nomes 'fname', 'fmail' e 'ftel' e os concatena em 'info'
     // com formatação.
 
     var servicos = formData.getAll('service');
     // Obtém todos os valores associados ao campo de entrada com o nome 'service' do formulário
     // e os armazena em um array 'servicos'.
 
     info += "\n Serviços escolhidos: " + servicos.join(', ');
     // Concatena os valores do array 'servicos' com a string 'info', adicionando "Serviços escolhidos: "
     // na frente deles e separando-os por vírgulas.
 
     var numberWs = '5581996793669';
     // Define o número de telefone para o qual a mensagem será enviada.
 
     var msgws = encodeURIComponent(info);
     // Codifica o texto da mensagem para uso em uma URL.
 
     var apiWp = 'https://api.whatsapp.com/send?phone=' + numberWs + '&text=' + msgws;
     // Cria uma URL 'apiWp' que contém o número de telefone e o texto da mensagem codificados,
     // preparados para abrir uma nova janela ou aba no WhatsApp.
 
     window.open(apiWp, '_blank');
     // Abre uma nova janela ou aba do navegador com a URL 'apiWp',
     // direcionando o usuário para o WhatsApp com o número de telefone e mensagem preenchidos.
 
     res.innerText = info;
     // Define o texto do elemento com o 'id' igual a 'res' com o valor da variável 'info',
     // que contém as informações coletadas do formulário.
 }
 