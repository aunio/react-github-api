var speakBtn = document.querySelector('#speakBtn');
var resultSpeaker = document.querySelector('#resultSpeak');

if (window.SpeechRecognition || window.webkitSpeechRecognition) {

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var myRecognition = new SpeechRecognition();
    myRecognition.lang = 'pt-BR';

    speakBtn.addEventListener('click', () => {
        try {
            myRecognition.start();
            speakBtn.innerHTML = "Estou te ouvindo!"
            speakBtn.classList.add("active");
        } catch (erro) {
            alert('erro:' + erro.message);
        }
    }, false);

    myRecognition.addEventListener('result', (evt) => {
        var resultSpeak = evt.results[0][0].transcript;
        resultSpeaker.innerHTML = resultSpeak;
        switch (resultSpeak.toLowerCase()) {
            case 'tela azul':
                document.body.style.backgroundColor = '#3b5998';
                break;
            case 'tela vermelha':
                document.body.style.backgroundColor = '#c4302b';
                break;
            case 'abrir meu linkedin':
                window.location.href = 'https://www.linkedin.com/in/aunio-ribeiro/';
                break;
            case 'ir para youtube':
                window.location.href = 'https://www.youtube.com/';
                break;
        }

        speakBtn.classList.remove("active");
        speakBtn.innerHTML = "Clique para falar!"

    }, false);

    myRecognition.addEventListener('error', (evt) => {

        resultSpeaker.innerHTML = 'Se você disse alguma coisa, não ouvi muito bem!';
        speakBtn.classList.remove("active");
        speakBtn.innerHTML = "Clique para falar!"

    }, false);

} else {

    resultSpeaker.innerHTML = 'Seu navegador não suporta tanta tecnologia!';

}