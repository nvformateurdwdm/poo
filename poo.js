class AbstractAnimal {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     */
    constructor(nom, couleur, sante = 100) {
        if(this.constructor === AbstractAnimal){
            throw new TypeError("Abstract class AbstractAnimal cannot be instantiated directly.");
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

class AbstractOiseau extends AbstractAnimal {
    constructor(nom, couleur, sante = 100, longueurDesAiles){
        super(nom, couleur, sante);
        
        if(this.constructor === AbstractOiseau){
            throw new TypeError("Abstract class Oiseau cannot be instantiated directly.");
        }

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

const typesPoisson = {
    EAU_DOUCE: 1,
    EAU_SALEE: 2,
    EAU_DOUCE_ET_SALEE: 3
}

class AbstractPoisson extends AbstractAnimal{
    constructor(nom, couleur, sante = 100, type){
        super(nom, couleur, sante);

        this.type = type;
    }

    nager(){
        console.log("Le poisson " + this.nom + " nage.");
        super.seDeplacer();
    }
}

class Dauphin extends AbstractPoisson{
    constructor(nom, couleur, sante = 100){
        super(nom, couleur, sante, typesPoisson.EAU_SALEE);
    }

    surfer(){
        console.log("Le dauphin " + this.nom + " surfe.");
    }
}

class Baleine extends AbstractPoisson{
    constructor(nom, couleur, sante = 100){
        super(nom, couleur, sante, typesPoisson.EAU_SALEE);
    }

    plonger(){
        console.log("La baleine " + this.nom + " plonge.");
    }

}

const especesRequin = {
    BLANC: 1,
    BOULEDOGUE: 2,
    MARTEAU: 3
}

class Requin extends AbstractPoisson{
    constructor(nom, couleur, sante = 100, espece){
        super(nom, couleur, sante);

        this.type = this.espece == especesRequin.BOULEDOGUE ? typesPoisson.EAU_DOUCE_ET_SALEE : typesPoisson.EAU_SALEE;

        this.sante = this.espece == especesRequin.MARTEAU ? 50 : this.sante;
    }

    communiquer(){
        console.log("Le requin ne communique pas.");
    }

    devorer(){
        super.manger();
    }

    manger(){
        console.log("Le requin ne mange pas, il dévore !");
    }

}

class Pie extends AbstractOiseau{
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

class Perroquet extends AbstractOiseau{
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

    parler(){
        console.log("Le perroquet " + this.nom + " parle.");
        super.communiquer();
    }

    communiquer(){
        console.log("Le perroquet " + this.nom + " communique.");
    }
}


const pieQuiChante = new Pie("Pie Qui Chante", 0x000000, 100, 50);
console.log(pieQuiChante);
pieQuiChante.chanter();

const coco = new Perroquet("Coco", 0xFF0000, 100, 80);
console.log(coco);
coco.parler();
console.log("--------");

coco.communiquer();