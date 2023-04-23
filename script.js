fetch("https://api.github.com/users/")  // Permet de facilement récupérer des ressources et de faire des requêtes

/* Permet de récupérer la réponse de notre fetch
on transforme ensuite cette réponse en '.json' donc en objet afin qu'il puisse être interprétable par notre navigateur */
.then(query_answer => query_answer.json())

// Deuxième '.then' qui permet maintenant de lire le '.json'
.then(query_answer2 => )