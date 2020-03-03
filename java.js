$(document).ready(function(){
    $("h1").hide(1000).show(1000);
});
$(document).ready(function(){
    $("#botao").click(function(){
var quest1 = $("[name='quest1']"); 
var quest2 = $("[name='quest2']");
var quest3 = $("[name='quest3']");
var quest4 = $("[name='quest4']");
var quest5 = $("[name='quest5']");
var quest6 = $("[name='quest6']");
var quest7 = $("[name='quest7']");
var quest8 = $("[name='quest8']");
var quest9 = $("[name='quest9']");
var quest10 =$("[name='quest10']");
var cont = 0;
    for(var i = 0 in quest1){
        if(quest1[i].checked){
            var teste = quest1[i].value;
            if(teste == 1){
                cont++;
                $("#res_1").css("color", "Green");
                $("#resposta1").text("Voce Acertou ✅");
            }
            else{
                $("#res_1").css("color","Yellow");
                $("#resposta1").text("Você Errou ❌ a Resposta certa esta pintada de Amarelo");
            }
        }
    }
    for(var i = 0 in quest2){
        if(quest2[i].checked){
            var teste = quest2[i].value;
            if(teste == 1){
                cont++;
                $("#res_2").css("color","Green");
                $("#resposta2").text("Voce Acertou ✅")
            }
            else{
                $("#res_2").css("color","Yellow");
                $("#resposta2").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo")
            }
        }
    }
        for(var i = 0 in quest3){
            if(quest3[i].checked){
                var teste = quest3[i].value;
                if(teste == 1){
                    cont++;
                    $("#res_3").css("color","Green");
                    $("#resposta3").text("Voce Acertou ✅")
                }
                else{
                    $("#res_3").css("color","Yellow");
                    $("#resposta3").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo")
                }
            }
        }
        for(var i = 0 in quest4){
            if(quest4[i].checked){
                var teste = quest4[i].value;
                if(teste == 1){
                    cont++;
                    $("#res_4").css("color","Green");
                    $("#resposta4").text("Voce Acertou ✅")
                }
                else{
                    $("#res_4").css("color","Yellow");
                    $("#resposta4").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo")
                }
            }
        }
        for(var i = 0 in quest5){
            if(quest5[i].checked){
                var teste = quest5[i].value;
                if(teste == 1){
                    cont++;
                    $("#res_5").css("color","Green");
                    $("resposta5").text("Voce Acertou ✅")
                }
                else{
                    $("#res_5").css("color","Yellow");
                    $("#resposta5").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo")
                }
            }
        }
        for(var i = 0 in quest6){
            if(quest6[i].checked){
                var teste = quest6[i].value;
                if(teste == 1){
                    cont++;
                    $("#res_6").css("color","Green");
                    $("#resposta6").text("Voce Acertou ✅")
                }
                else{
                    $("#res_6").css("color","Yellow");
                    $("#resposta6").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo")
                }
            }
        }
        for(var i = 0 in quest7){
            if(quest7[i].checked){
                var teste = quest7[i].value;
                if(teste == 1){
                    cont++;
                    $("#res_7").css("color","Green");
                    $("#resposta7").text("Voce Acertou ✅")
                }
                else{
                    $("#res_7").css("color","Yellow");
                    $("#resposta7").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo");
                }
            }
        }
        for(var i = 0 in quest8){
            if(quest8[i].checked){
                var teste = quest8[i].value;
                if(teste == 1){
                    cont++;
                    $("#res_8").css("color","Green");
                    $("#resposta8").text("Voce Acertou ✅")
                    
                }
                else{
                    $("#res_8").css("color","Yellow");
                    $("#resposta8").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo")
                }
            }
        }
        for(var i = 0 in quest9){
            if(quest9[i].checked){
                var teste = quest9[i].value;
                if(teste == 1){
                    cont++;
                    $("#res_9").css("color","Green");
                    $("#resposta9").text("Voce Acertou ✅")
                }
                else{
                    $("#res_9").css("color","Yellow");
                    $("#resposta9").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo")
                }
            }
        }
        for(var i = 0 in quest10){
            if(quest10[i].checked){
                var teste = quest10[i].value;
                if(teste == 1){
                    cont++;
                    $('#res_10').css("color","Green");
                    $("#resposta10").text("Voce Acertou ✅")
                }
                else{
                    $("#res_10").css("color","Yellow");
                    $("#resposta10").text("Voce Errou ❌ a Resposta certa esta pintada de Amarelo")
                }
            }
        }
        $("#result").val(cont);
        cont = 0;
    })
})