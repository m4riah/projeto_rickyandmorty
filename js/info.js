// Obtém o ID do personagem da URL
var urlParams = new URLSearchParams(window.location.search);
var id = urlParams.get('id');

fetch('https://rickandmortyapi.com/api/character/' + id, {
  method: 'GET'
})
  .then(response => response.json())
  .then(function(data) {
    var characterDetails = document.querySelector('.character-details');

    characterDetails.innerHTML = `
    <div class= "card-img">
    <img src=` + data.image + ` >
    </div>
    <div class= "info"> 
      <h1> `+ data.name + ` </h1>
      <p>Especie: ` + data.species + `</p>
      <p>Cidade: ` + data.location.name + `</p>
      <p>Genero: ` + data.gender + `</p>
      <p>Status: ` + data.status + ` </p>
      </div>
    `;
  });
  
 function redirectToPage() {
    window.location.href = "/index.html";
}