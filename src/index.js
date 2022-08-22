const Personne = require('./personne.js').Personne;
const Genre = require('./personne.js').Genre;
const Bonus = require('./bonus.js').Bonus;
const calculerSalaire = require('./calculSalaire.js').calculerSalaire;

const afficherSalaire = p =>
{
    console.log(p);
    console.log(`Salaire calculé : ${calculerSalaire(p)} €`);
    console.log();
}

afficherSalaire(new Personne(1500, Genre.homme));
afficherSalaire(new Personne(1500, Genre.femme));
afficherSalaire(new Personne(1500, Genre.homme, 3, [Bonus.bonus]));
afficherSalaire(new Personne(1500, Genre.homme, 3, [Bonus.bonus, Bonus.allocation]));
afficherSalaire(new Personne(1500, Genre.homme, 4, [Bonus.bonus, Bonus.allocation]));
afficherSalaire(new Personne(1500, Genre.femme, 4, [Bonus.bonus, Bonus.allocation]));
