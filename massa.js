(function main(win,doc){
    'use strict';

    let btnenviar = document.getElementById('enviar');
    let btnlimpar = document.getElementById('limpar');

    btnenviar.addEventListener('click',imc,false);
    btnlimpar.addEventListener('click',limpeza,false);



    //função com o argumento 'e' de evento
    function imc(e)
    {
        let altura = document.getElementById("altura").value;
        let peso = document.getElementById("peso").value;

        if(altura == 0 || peso == 0)
        {
            alert("Favor digitar os valores para peso e altura.");
        }
        else{
            let alt = altura.replace(',','.');//alterar vírgula por ponto
            let pes = peso.replace(',','.');//alterar vírgula por ponto
            let imc = (pes/Math.pow(alt,2)).toFixed(1); //para fixar o resultado com apenas uma casa decimal
            document.getElementById("resultado").innerHTML=imc;
        }
        
    }

    //função com o argumento 'e' de evento, sem ele a função não é chamada
    function limpeza(e)
    {
        document.getElementById("resultado").innerHTML=""; //altera elemento da div
        document.getElementById("altura").value = ""; //altera valor dos inputs
        document.getElementById("peso").value= "";
    }
})(window,document);




