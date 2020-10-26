function eventos(){
  $("#btnadd").click(function (){
    $('#div-nova-tarefa').fadeIn('slow');
  });

  $("#btncalcelar").click(function (){
    $('#div-nova-tarefa').fadeOut();
  })

}

$(document).ready(function(){
    $('.sidenav').sidenav();

    eventos();
  });

  

