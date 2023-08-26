$(document).ready(function() {
  // Esta función se ejecuta cuando el documento HTML ha cargado completamente.
  
  $('#solicitud').submit(function(event) {
    // Esta función se ejecuta cuando se envía el formulario con el id
    
    event.preventDefault(); // Evitar que el  formulario se envíe de manera convencional.

    //Aquí se están capturando los valores ingresados por el usuario en los campos del formulario y guardándolos en variables.
    // Se obtiene los valores del formulario usando jQuery.
    const nombre = $('#nombre').val(); 
    const material = $('#material').val(); 
    const dimension = $('input[name="dimension"]:checked').attr("id"); 
    const comentario = $('#comentario').val(); 
    
    // Mapear ID de dimensiones a un texto más legible.
    const dimensionTexts = {
      pequeño: 'diminutas',
      medio: 'medianas',
      largo: 'grandes'
    };
    
    // Crear mensaje personalizado utilizando los valores obtenidos.
    let message = `${nombre} ha pedido una caja de ${material} con unas dimensiones ${dimensionTexts[dimension]}.`;
    if (comentario) {
      message += ` Comentario: ${comentario}`;
    }
    
    // Mostrar el mensaje en la página reemplazando el contenido del elemento con id "resultado".
    $('#resultado').text(message);
  });
});
