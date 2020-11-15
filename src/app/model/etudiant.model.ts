import { Classe } from './classe.model';
import { Scolarite } from './scolarite.model';

export class Etudiant{
    public id:number;
    public nom:string;
    public prenom:string;
    public date_naissance:string;
    public telephone:string;
    public email:string;
    public titre:string;
    public diplome:string;
    public matricule:string;
    public created_at:string;
    public classe:Classe;
    public scolarite:Scolarite;
    public created_by_id: string;
    public modified_by_id:string;
}