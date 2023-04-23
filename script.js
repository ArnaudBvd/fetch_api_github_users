btn.onclick = () => {
    fetch("https://api.github.com/users/" + champ.value) // Permet de facilement récupérer des ressources et de faire des requêtes

        /* Permet de récupérer la réponse de notre fetch
on transforme ensuite cette réponse en '.json' donc en objet afin qu'il puisse être interprétable par notre navigateur */
        .then(query_answer => query_answer.json())

        // Deuxième '.then' qui permet maintenant de lire le '.json'
        .then(data => {
            output.textContent = ""; // permet de se vider lors d'une nouvelle requête 
            output.textContent = `Compte de ${data.name}`;            
            const img = document.createElement('img');
            img.src = data.avatar_url;
            output.appendChild(img);                    
        })       
}


// fetch("https://api.github.com/users/nadfri")
//     .then(reponse => reponse.json())
//     .then(reponse2 => console.table(reponse2))