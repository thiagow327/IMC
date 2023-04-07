function calcular() {
    // Obtendo os elementos DOM
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado')
    var imagem = document.getElementById('imagem');
    var classificacao = document.getElementById('classificacao');

    // Convertendo os valores de peso e altura para números
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // Verificando se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.innerHTML = 'Por favor, insira valores válidos de peso e altura.';
        return;
    }

    // Calculando o IMC
    var imc = peso / (altura * altura);
    var imc = imc.toFixed(2);

    // Exibindo o resultado
    resultado.innerHTML = 'Seu IMC é: ' + imc;

    // Condições para exibir as imagens ilustrativas e suas respectivas classificações
    if (imc < 18.5) {
        imagem.src = 'images/baixo-peso.jpg'
        classificacao.innerHTML = 'Baixo Peso'
    } else if (imc >= 18.5 && imc < 25) {
        imagem.src = 'images/peso-normal.jpg'
        classificacao.innerHTML = 'Peso Normal'
    } else if (imc >= 25 && imc < 30) {
        imagem.src = 'images/excesso-de-peso.jpg'
        classificacao.innerHTML = 'Excesso De Peso'
    } else if (imc >= 30 && imc < 35) {
        imagem.src = 'images/obesidade.jpg'
        classificacao.innerHTML = 'Obesidade'
    } else {
        imagem.src = 'images/obesidade-extrema.jpg'
        classificacao.innerHTML = 'Obesidade Extrema'
    }
}