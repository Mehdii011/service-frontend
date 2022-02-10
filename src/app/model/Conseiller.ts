export interface Conseiller{

    id?:number;
    nom?:string;
    prenom?:string;
    adresse?:string;
    password?:string;
    codePostal?:number;
    email?:string
   clients?:[{
     id?: number;
     nom?: string;
     prenom?: string;
     adresse?: string;
     codePostal?: number;
     compte?: any;
     cartes?: any;
     ville?: string;
     telephone?: any;
     password?: string
   }]
    comptes?:any;
    cartes?:any;
    ville?:string;
    telephone?:any;

}
