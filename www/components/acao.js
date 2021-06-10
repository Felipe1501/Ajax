// This is a JavaScript file

$(document).on("click", "#busca", function(){
    $.ajax({
     type: "get",
     url:"http://viacep.com.br/ws/"+$("#cep").val()+"/json/",  
     success: function(data){
       var final;
       final = "<p><strong>Logradouro: </strong>"+data.logradouro+"</p>";
       final += "<p><strong>Complemento: </strong>"+data.complemento+"</p>";
       final += "<p><strong>Bairro: </strong>"+data.bairro+"</p>";
       final += "<p><strong>Localidade: </strong>"+data.localidade+"</p>";
       final += "<p><strong>Uf: </strong>"+data.uf+"</p>";

       $("#dadoscep").html(final);
     },
     error: function(){
      alert("Ops, deu Erro! Tente Novamente");
     }
    });
});