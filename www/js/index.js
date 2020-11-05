document.addEventListener('deviceready', onDeviceReady, false);


function eventos(){
  $("#btnadd").click(function (){
    $('#div-nova-tarefa').fadeIn('slow');
  });


  $("#btnincluir").click(function(){
    var descricao = $("#descricao").val();
    window.banco.salvar(descricao, function(resultados){
       console.log(resultados);
    });
});


  $("#btncalcelar").click(function (){
    $('#div-nova-tarefa').fadeOut();
  });

 

}

$(document).ready(function(){
    $('.sidenav').sidenav();

    eventos();
  });

  

