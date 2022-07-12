class AbstractAnimal {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     */
    constructor(nom, couleur, sante = 100) {
        if(this.constructor === AbstractAnimal){
            throw new TypeError("Abstract class AbstractAnimal cannot be instantiated directly");
        }
        this.nom = nom;
        this.couleur = couleur;
        this.sante = sante;
    }

    dormir() {
        console.log("L'animal " + this.nom + " dort.");
    }

    manger() {
        console.log("L'animal " + this.nom + " mange.");
    }

    attaquer() {
        console.log("L'animal " + this.nom + " attaque.");
    }

    seDeplacer() {
        console.log("L'animal " + this.nom + " se déplace.");
    }

    communiquer() {
        console.log("L'animal " + this.nom + " communique.");
    }
}

class Oiseau extends AbstractAnimal {
    constructor(nom, couleur, sante = 100, longueurDesAiles){
        super(nom, couleur, sante);

        this.longueurDesAiles = longueurDesAiles;
    }

    voler(){
        super.seDeplacer();
        console.log("L'oiseau " + this.nom + " vole.");
    }

    chanter(){
        super.communiquer();
        console.log("L'oiseau " + this.nom + " chante.");
    }

}

class Pie extends Oiseau{
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     * @param {Number} longueurDesAiles 
     */
    constructor(nom, couleur, sante = 100, longueurDesAiles){
        super(nom, couleur, sante, longueurDesAiles);
    }

    chaparder(){
        console.log("La pie " + this.nom + " chaparde.");
    }
}

const pieQuiChante = new Pie("Pie Qui Chante", 0x000000, 100, 50);
console.log(pieQuiChante);