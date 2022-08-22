const personne = require('./personne.js');

exports.calculerSalaire = p =>
{
    let impotsRevenu = 0.18;
    const assuranceEmploye = 0.07;
    const regimePensionCanada = 0.05;

    if (p.genre == personne.Genre.femme)
        impotsRevenu -= 0.02;

    if (p.personnesACharge == 3)
        impotsRevenu -= 0.01;
    else if (p.personnesACharge >= 4)
        impotsRevenu -= 0.02;

    let salaire = p.salaireBrut;
    salaire += p.bonus.reduce((acc, bonus) => acc + bonus.montant, 0);

    const reduction = 1 - (impotsRevenu + assuranceEmploye + regimePensionCanada);
    salaire *= reduction;

    return salaire;
};
