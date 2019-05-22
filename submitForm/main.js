const form = document.querySelector('.formulario');
form.addEventListener("submit",function(e){
    e.preventDefault();
    const content = new FormData(this);
    fetch("processa.php", {
        method: "POST",
        body: content
    })
    .then(response => response.json())
    .then(data => console.log("OK"+data.mensagem))
})
