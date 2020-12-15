//Código para Datables

//$('#example').DataTable(); //Para inicializar datatables de la manera más simple

$(document).ready(function() {    
    $('#locales').DataTable({
    //para cambiar el lenguaje a español
        "language": {
                "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                    "sFirst": "Primero",
                    "sLast":"Último",
                    "sNext":"Siguiente",
                    "sPrevious": "Anterior"
			     },
			     "sProcessing":"Procesando...",
            }
    });     
});

var _Dni=  document.getElementById('_Dni');
_Dni.addEventListener('input',function(){
  if (this.value.length > 12) 
     this.value = this.value.slice(0,12); 
})