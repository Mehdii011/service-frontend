export interface Client{
    id?:number;
    nom?:string;
    prenom?:string;
    adresse?:string;
    codePostal?:number;
    comptes?:[{
        numeroCompte?:number;
        solde?:number;
        dateCreation?:string;
        decouvert?:number;
    }];
    cartes?:any;
    ville?:string;
    telephone?:any;
    password?:string;



}
