fetch(' https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(response => response.json())
.then(function(json){

    var container = document.querySelector('.container');

    json.results.map(function(results){

        container.innerHTML+=`
            <div class= "card" data-id= ` + results.id + `>
            <img src= ` + results.image +`> 
            <strong> ` + results.name + ` </strong><br>
            <span> ` + results.species +` </span><br>
            </div>
            `;

    })
    
    // Adiciona o evento de clique para os cards
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      card.addEventListener('click', function() {
        var id = card.getAttribute('data-id');
        var url = 'info.html?id=' + id;
        // Redireciona para a nova página com o ID específico
         window.location.href = url
      });
    });

})
