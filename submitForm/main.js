const form = document.querySelector('.formulario');
form.addEventListener("submit",function(e){
    e.preventDefault();
    content = new FormData(this);
    fetch("processa.php", {
        method: "POST",
        body: content
    })
    .then(data => console.log("OK"+data))
})
