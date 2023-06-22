fetch(' https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(response => response.json())
.then(function(json){

    var container = document.querySelector('.container');

    json.results.map(function(results){

        container.innerHTML+=`
            <div class= "card"><img src= ` + results.image +`> 
            <strong> ` + results.name + ` </strong><br>
            <span> ` + results.species +` </span><br>
            <p> ` + results.status + ` </p>
            </div>
            `;
    })
    
})
