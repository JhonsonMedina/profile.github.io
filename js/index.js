document.getElementById('downloadBtn').addEventListener('click', function() {
    // Nombre del archivo que se descargará
    const fileName = 'Mi_CV.pdf';
    
    // Ruta relativa al archivo (asegúrate de que existe en tu proyecto)
    const fileUrl = 'cv.pdf';
    
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    
    // Simular clic en el enlace
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Opcional: Mensaje de confirmación
    alert('Descarga iniciada. Si no funciona, verifica que el archivo exista.');
});