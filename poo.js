class AbstractNourriture{
    constructor(ptsDeVie = 10){
        this.ptsDeVie = ptsDeVie;
    }
}

class AbstractAnimal extends AbstractNourriture {
    /**
     * 
     * @param {String} nom 
     * @param {Number} couleur 
     * @param {Number} sante 
     */
    constructor(nom, couleur, sante = 100, ptsDeVie = 10) {
        super(ptsDeVie);

        if(this.constructor === AbstractAnimal){
            throw new TypeError("Abstract class AbstractAnimal cannot be instantiated directly.");
        }
        this.nom = nom;
        this.couleur = couleur;
        this.sante = sante;
    }

    get nomFormate(){
        return "'" + this.nom + "'";
    }

    dormir() {
        console.log("L'animal " + this.nomFormate + " dort.");
    }

    manger(nourriture) {
        console.log("L'animal " + this.nomFormate + " mange " + nourriture.nom);

        if(this instanceof Requin){
            console.log("C'est un requin qui mange.");
            this.sante += nourriture.ptsDeVie * 2;    
        }else{
            this.sante += nourriture.ptsDeVie;
        }
    }

    attaquer() {
        console.log("L'animal " + this.nomFormate + " attaque.");
    }

    seDeplacer() {
        console.log("L'animal " + this.nomFormate + " se déplace.");
    }

    communiquer() {
        console.log("L'animal " + this.nomFormate + " communique.");
    }
}

class AbstractOiseau extends AbstractAnimal {
    constructor(nom, couleur, sante = 100, ptsDeVie = 10, longueurDesAiles){
        super(nom, couleur, sante, ptsDeVie);
        
        if(this.constructor === AbstractOiseau){
            throw new TypeError("Abstract class Oiseau cannot be instantiated directly.");
        }

        this.longueurDesAiles = longueurDesAiles;
    }

    voler(){
        super.seDeplacer();
        console.log("L'oiseau " + this.nomFormate + " vole.");
    }

    chanter(){
        super.communiquer();
        console.log("L'oiseau " + this.nomFormate + " chante.");
    }

}

const typesPoisson = {
    EAU_DOUCE: 1,
    EAU_SALEE: 2,
    EAU_DOUCE_ET_SALEE: 3
}

class AbstractPoisson extends AbstractAnimal{
    constructor(nom, couleur, sante = 100, ptsDeVie = 15, type){
        super(nom, couleur, sante, ptsDeVie);

        this.type = type;
    }

    nager(){
        console.log("Le poisson " + this.nomFormate + " nage.");
        super.seDeplacer();
    }
}

class Dauphin extends AbstractPoisson{
    constructor(nom, couleur, sante = 100){
        super(nom, couleur, sante, 25, typesPoisson.EAU_SALEE);
    }

    surfer(){
        console.log("Le dauphin " + this.nomFormate + " surfe.");
    }
}

class Baleine extends AbstractPoisson{
    constructor(nom, couleur, sante = 100){
        super(nom, couleur, sante, 30, typesPoisson.EAU_SALEE);
    }

    plonger(){
        console.log("La baleine " + this.nomFormate + " plonge.");
    }

}

const especesRequin = {
    BLANC: 1,
    BOULEDOGUE: 2,
    MARTEAU: 3
}

class Requin extends AbstractPoisson{
    constructor(nom, couleur, sante = 100, espece){
        super(nom, couleur, sante, 0);

        this.type = this.espece == especesRequin.BOULEDOGUE ? typesPoisson.EAU_DOUCE_ET_SALEE : typesPoisson.EAU_SALEE;

        this.sante = this.espece == especesRequin.MARTEAU ? 50 : this.sante;
    }

    communiquer(){
        console.log("Le requin ne communique pas.");
    }

    devorer(nourriture){
        super.manger(nourriture);
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
        console.log("La pie " + this.nomFormate + " chaparde.");
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
        console.log("Le perroquet " + this.nomFormate + " parle.");
        super.communiquer();
    }

    communiquer(){
        console.log("Le perroquet " + this.nomFormate + " communique.");
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

const mobyDick = new Baleine("Moby Dick", 0x3e3e3e, 90);
console.log(mobyDick);

const flipper = new Dauphin("Flipper", 0x3e3e3e, 100);
console.log(flipper);


const bruce = new Requin("Bruce", 0x3e3e3e, 100, especesRequin.BLANC);
const enclume = new Requin("Enclume", 0x3e3e3e, 100, especesRequin.MARTEAU);
const boule = new Requin("Boule", 0x3e3e3e, 100, especesRequin.BOULEDOGUE);

console.log(bruce);
console.log(enclume);
console.log(boule);

bruce.devorer(flipper);