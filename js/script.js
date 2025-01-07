const modoOscuro = document.getElementById("modoOscuro");
const body = document.querySelector("body");
const tarjeta = document.getElementsByClassName("service_card");

modoOscuro.addEventListener("change", function() {

    localStorage.setItem('miCheckboxEstado', this.checked);

    if (this.checked){

        body.style.backgroundColor="#0b090a";
        body.style.color="white";
        
        
        for (let i = 0; i < tarjeta.length; i++) {
        tarjeta[i].style.backgroundColor="#14213d";
        tarjeta[i].classList.add("modo-oscuro")
        
        
    }}

    else{

        body.style.backgroundColor="white";
        body.style.color="black";
        for (let i = 0; i < tarjeta.length; i++) {
            tarjeta[i].style.backgroundColor = ""; // O el color original
            tarjeta[i].classList.remove("modo-oscuro")
            

    }}

});

window.addEventListener('load', function() {
    if (localStorage.getItem('miCheckboxEstado') === 'true') {
      modoOscuro.checked = true;
      // Aplicar cambios de estilo
      body.style.backgroundColor="#0b090a";
        body.style.color="white";
        
        
        for (let i = 0; i < tarjeta.length; i++) {
        tarjeta[i].style.backgroundColor="#14213d";
        tarjeta[i].classList.add("modo-oscuro")}
      // ... otros cambioso
    }
  });

window.addEventListener('pageshow', function(event) {
    if (event.persisted || performance.navigation.type == performance.navigation.TYPE_BACK_FORWARD) {
      location.reload();
    }
  });