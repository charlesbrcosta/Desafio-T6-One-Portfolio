document.addEventListener('DOMContentLoaded', function () {
    const name = document.getElementById('userName');
    const email = document.getElementById('userEmail');
    const phone = document.getElementById('phoneNumber');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit');
    const messageError = document.getElementById('errorMessage');
    const msgError = document.querySelector('.error-message'); 
    
    clearFields();

    // Função para validar o nome
    function validateName() {        

        if (name.value.length < 15) {
            
            // messageError.innerText = ''; // Limpa a mensagem de sucesso
            msgError.classList.add('visibled');
            messageError.innerText = 'Nome deve ter mais de 15 caracteres';
            name.style.outline = '1px solid var(--error-color)';
            messageError.style.color = 'var(--error-color)'; // Cor vermelha para mensagens de erro
            
            return false;
        } else {    
            // messageError.innerText = ''; // Limpa a mensagem de erro
            msgError.classList.add('visibled');
            name.style.outline = '1px solid var(--sucess-color)'; // Adiciona a cor verde ao outline
            messageError.innerText = 'Nome válido!';
            messageError.style.color = 'var(--sucess-color)'; // Cor verde para mensagem de sucesso
            return true;
        }
    }

    // Função para validar o e-mail
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            // messageError.innerText = ''; // Limpa a mensagem de sucesso
            msgError.classList.add('visibled');
            messageError.innerText = 'E-mail inválido.';
            email.style.outline = '1px solid var(--error-color)';
            messageError.style.color = 'var(--error-color)'; // Cor vermelha para mensagens de erro
            
            return false;
        } else {
            // messageError.innerText = ''; // Limpa a mensagem de erro
            msgError.classList.add('visibled');
            email.style.outline = '1px solid var(--sucess-color)'; // Adiciona a cor verde ao outline
            messageError.innerText = 'E-mail válido';
            messageError.style.color = 'var(--sucess-color)'; // Cor verde para mensagem de sucesso
            return true;
        }
    }

    // Função para validar o número de telefone
    function validatePhone() {
        const phonePattern = /^(?:(?:(?:\+|00)55\s?)?(\s?\(\d{2}\)\s?)?)(?:\s?9\s?\d{4}-?\d{4}|\s?[2-5]|(?:\s?(?:9[1-9]\d{3}|[1-9]\d{3}))\s?-?\s?\d{4})$/;
        if (!phonePattern.test(phone.value)) {
            // messageError.innerText = ''; // Limpa a mensagem de sucesso
            msgError.classList.add('visibled');
            messageError.innerText = 'Telefone inválido';
            phone.style.outline = '2px solid var(--error-color)'; // Adiciona borda vermelha para indicar erro
            messageError.style.color = 'var(--error-color)';
            return false;
        } else {
            // messageError.innerText = ''; // Limpa a mensagem de erro
            msgError.classList.add('visibled');
            phone.style.outline = '2px solid green'; // Adiciona borda verde para indicar sucesso
            messageError.innerText = 'Telefone válido';
            messageError.style.color = 'var(--sucess-color)'; // Cor verde para mensagem de sucesso
            return true;
        }
    }

    //Função para validar o assunto
    function validateSubject() {
        if(subjectInput.value.length < 15){
            // messageError.innerText = '';
            msgError.classList.add('visibled');
            messageError.innerText = 'Assunto de ter 15 ou mais caracteres';
            subjectInput.style.outline = '1px solid var(--error-color)';
            messageError.style.color = 'var(--error-color)';

            return false;
        } else {
            // messageError.innerText = ''; // Limpa a mensagem de erro
            msgError.classList.add('visibled');
            subjectInput.style.outline = '1px solid var(--sucess-color)';
            messageError.innerText = 'Assunto válido';
            messageError.style.color = 'var(--sucess-color)';

            return true;
        }
    }

    // Função para validar a mensagem
    function validateMessage() {
        if (messageInput.value.length < 15 || messageInput.value.length > 300) {
            // messageError.innerText = ''; // Limpa a mensagem de sucesso
            msgError.classList.add('visibled');
            messageError.innerText = 'Mensagem deve ter entre 15 e 300 caracteres';
            messageInput.style.outline = '1px solid var(--error-color)'
            messageError.style.color = 'var(--error-color)'; // Cor vermelha para mensagens de erro
            
            return false;
        } else {
            // messageError.innerText = ''; // Limpa a mensagem de erro
            msgError.classList.add('visibled');
            messageInput.style.outline = '1px solid var(--sucess-color)'; // Adiciona a cor verde ao outline
            messageError.innerText = 'Mensagem válida';
            messageError.style.color = 'var(--sucess-color)'; // Cor verde para mensagem de sucesso
            return true;
        }
    }

    // Função para validar o formulário completo
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        const isValidatePhone = validatePhone();
        const isValidateSubject = validateSubject();

        return isNameValid && isEmailValid && isMessageValid && isValidatePhone && isValidateSubject;
    }

    // Adiciona um evento de clique ao botão de enviar
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        if (validateForm()) {
            // Aqui você pode enviar o formulário para o servidor ou fazer outra ação
            alert('Formulário válido! Mensagem enviada com sucesso.');
            clearFields();
        } else {
            alert('Por favor, antes de enviar verifique o preenchimento dos campos se estão corretos.');
        }
    });

    function clearFields() {
        const fieldsToClean = [ name, email, phone, subjectInput, messageInput ];
        fieldsToClean.forEach(field => {
            field.value = '';
            field.style.outline = 'none';
        });    
        msgError.classList.remove('visibled');
    }
    
    // Adiciona eventos de input para validar em tempo real
    name.addEventListener('input', validateName);
    email.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);
    phone.addEventListener('input', validatePhone);
    subjectInput.addEventListener('input', validateSubject);

 });
