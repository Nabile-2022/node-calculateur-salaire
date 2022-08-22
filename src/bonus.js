exports.Bonus = class Bonus
{
    constructor(montant)
    {
        this._montant = montant;
    }

    get montant() { return this._montant; }

    static get bonus() { return new Bonus(100); }

    static get allocation() { return new Bonus(150); }
}
