const form = document.querySelector('.formulario');
form.addEventListener("submit",function(e){
    e.preventDefault();
    const value = this.n.value;
    fetch("https://cors-anywhere.herokuapp.com/https://testandoapi.herokuapp.com/dobro/"+value, {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
    })
})
