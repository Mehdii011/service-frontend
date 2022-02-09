export interface Compte{
    numeroCompte?:number;
    solde?:number;
    dateCreation?:string;
    decouvert?:number;
    operations?:[{
        idOperation?:number,
        dateOperation?:string,
        montant:number
    }];
    
}
