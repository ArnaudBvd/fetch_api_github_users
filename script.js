btn.onclick = () => {
    fetch("https://api.github.com/users/" + champ.value) // Permet de facilement récupérer des ressources et de faire des requêtes

        /* Permet de récupérer la réponse de notre fetch
on transforme ensuite cette réponse en '.json' donc en objet afin qu'il puisse être interprétable par notre navigateur */
        .then(query_answer => query_answer.json())

        // Deuxième '.then' qui permet maintenant de lire le '.json'
        .then(data => {
            output.textContent = ""; // permet de se vider lors d'une nouvelle requête 
            output.textContent = `Compte de : ${data.name}`;
            const IMG = document.createElement('img');
            IMG.src = data.avatar_url;
            output.appendChild(IMG);

            const LOGIN = document.createElement('p');
            LOGIN.textContent = `Login : ${data.login}`;
            output.appendChild(LOGIN);

            const URL = document.createElement('p');
            URL.textContent = `URL : ${data.html_url}`;
            output.appendChild(URL);

            const REPOS = document.createElement('p');
            REPOS.textContent = `Nombre de repositories publiques : ${data.public_repos}`;
            output.appendChild(REPOS);

            const FOLLOWERS = document.createElement('p');
            FOLLOWERS.textContent = `Nombre de followers : ${data.followers}`;
            output.appendChild(FOLLOWERS);

            const FOLLOWING = document.createElement('p');
            FOLLOWING.textContent = `Nombre de following : ${data.following}`;
            output.appendChild(FOLLOWING);

            let border = document.querySelector('#output');
            border.classList.add('border');
        })

}


// fetch("https://api.github.com/users/nadfri")
//     .then(reponse => reponse.json())
//     .then(reponse2 => console.table(reponse2))