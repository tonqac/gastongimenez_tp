document.querySelectorAll('.eliminar').forEach((elem)=>{
    elem.addEventListener('click', (e)=>{
        if (!confirm("¿Seguro deseas eliminar?")) {
            e.preventDefault();
        }
    });
});