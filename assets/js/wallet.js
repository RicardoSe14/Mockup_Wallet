
$(".botonmenu1").mouseenter(function() {
        $('.saldo').css('color', 'white');
        $('.fa-hand-holding-dollar ').css('color', 'white')
    });

$(".botonmenu1").mouseleave(function() {
        $('.saldo').css('color', '#303030');
        $('.fa-hand-holding-dollar').css('color', '#303030')
    });

$(".botonmenu2").mouseenter(function() {
        $('.send').css('color', 'white');
        $('.fa-share').css('color', 'white')
    });

$(".botonmenu2").mouseleave(function() {
        $('.send').css('color', '#303030');
        $('.fa-share').css('color', '#303030')
    });

$(".botonmenu3").mouseenter(function() {
        $('.deposit').css('color', 'white');
        $('.fa-money-bill-transfer').css('color', 'white')
    });

$(".botonmenu3").mouseleave(function() {
        $('.deposit').css('color', '#303030');
        $('.fa-money-bill-transfer').css('color', '#303030')
    });

$(".botonmenu4").mouseenter(function() {
        $('.transaction').css('color', 'white');
        $('.fa-clipboard').css('color', 'white')
    });

$(".botonmenu4").mouseleave(function() {
        $('.transaction').css('color', '#303030');
        $('.fa-clipboard').css('color', '#303030')
    });

$(".botonmenu5").mouseenter(function() {
        $('.help').css('color', 'white');
        $('.fa-circle-question').css('color', 'white')
    });

$(".botonmenu5").mouseleave(function() {
        $('.help').css('color', '#303030');
        $('.fa-circle-question').css('color', '#303030')
    });

$(".botonmenu6").mouseenter(function() {
        $('.exit').css('color', 'white');
        $('.fa-right-from-bracket').css('color', 'white')
    });

$(".botonmenu6").mouseleave(function() {
        $('.exit').css('color', '#303030');
        $('.fa-right-from-bracket').css('color', '#303030')
    });






      $(document).ready(function () {
        $("#AñadirContacto").click(function(){
            const nombre =  $("#nombre").val();
            const  alias=$("#alias").val();
            const  banco =$("#nombreBanco").val();
            const  cuenta=$("#numeroCuenta").val();


          
        
           
        //mostrar resultado
        
        $("#NombreContacto").html(nombre);
        $("#AliasContacto").html(alias);
      $("#NombreBancoContacto").html( "Banco "+banco) ;  
        $("#NumeroCuentaContacto").html(cuenta);
        
        return true;
        })
        });
  
        
  
  
        $("#AñadirContacto").click(function(){
          $(".contacto1").show(0);
        });

        
