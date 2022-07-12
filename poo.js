    class Animal{
        constructor(nom, couleur, sante = 100){
            this.nom = nom;
            this.couleur = couleur;
            this.sante = sante;
        }

        dormir(){
            console.log("L'animal " + this.nom + " dort.");
        }

        manger(){
            console.log("L'animal " + this.nom + " mange.");
        }

        attaquer(){
            console.log("L'animal " + this.nom + " attaque.");
        }

        seDeplacer(){
            console.log("L'animal " + this.nom + " se déplace.");
        }

        communiquer(){
            console.log("L'animal " + this.nom + " communique.");
        }
    }