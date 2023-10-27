function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.createElement('img'); 

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - fano.value;
        var genero = '';

        if (fsex[0].checked) {
            genero = 'um Homem';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'Hcrianca.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Hjovem.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Hadulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'Hidoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'uma Mulher';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'Mcrianca.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'Mjovem.png');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Madulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'Midoso.png');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
