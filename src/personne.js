class Genre
{
    static get homme() { return 'Homme'; }
    static get femme() { return 'Femme'; }
}
exports.Genre = Genre;

exports.Personne = class Personne
{
    constructor(salaireBrut, genre, personnesACharge = 0, bonus = [])
    {
        this._salaireBrut = salaireBrut;
        this._genre = genre;
        this._personnesACharge = personnesACharge;
        this._bonus = bonus;
    }

    get salaireBrut() { return this._salaireBrut; }

    get genre() { return this._genre; }

    get personnesACharge() { return this._personnesACharge; }

    get bonus() { return this._bonus; }
}
