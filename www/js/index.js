document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
  carregaTarefas();
}

function carregaTarefas(){
  window.banco.listar(function(registros){
    var lista = $("#lista-tarefas");
    for (var i=0;i<registros.length;i++){        
        var item = '<li class="collection-item avatar">'
        +'<i class="material-icons circle cyan">insert_chart</i>'
        +'<span class="title">Tarefa</span>'
        +'<p class="tarefa-descricao">'+registros[i].descricao+'</p>'
        +'<a href="#!" class="secondary-content delete-tarefa" tarefa_id="'+registros[i].id+'"><i class="material-icons">delete</i></a>'
        +'</li>';
    
        lista.append(item);
   }

   $(".delete-tarefa").click(function(){ 
     var tarefa_id = $(this).attr("tarefa_id"); 
     var li = $(this).parent();
     window.banco.excluir(tarefa_id,function(){
       $(li).remove();
       location.reload();
     });
   });
  });

}

function eventos(){
  $("#btnadd").click(function (){
    $('#div-nova-tarefa').fadeIn('slow');
    
  });


  $("#btnincluir").click(function(){
    var descricao = $("#descricao").val();
    window.banco.salvar(descricao, function(resultados){
       console.log(resultados);
       $('#div-nova-tarefa').fadeOut();
       //$('#div-nova-tarefa').slideUp('slow'); Com esse comando, ao inves de FADEOUT, remove com efeito deslizante.
       location.reload();


    });
});


  $("#btncalcelar").click(function (){
    $('#div-nova-tarefa').fadeOut();
  });


  $("#search").change(function(){
    let filtro = $(this).val();
    $(".tarefa-descricao").each(function(){
      if ($(this).text().includes(filtro)){
        $(this).parent().show();
      }else{
        $(this).parent().hide();
      }
    });
  });

  $("#nova-tarefa").click(function (){
    $('#div-nova-tarefa').fadeIn('slow');
    $(this).parent().parent().hide('slow');
    
  });

}


$(document).ready(function(){
    $('.sidenav').sidenav();

    eventos();
  });

  

