export class Bien {
    id?: number;
    title: string = '';
    ville: string = '';
    nbDePiece: number = 0;
    superficie: number = 0;
    reserved: boolean = false;
    picture: string = '';
    prix: number = 0;
    dateArrive: Date = new Date();
    dateDepart: Date = new Date();
    nbrPersonne: number = 0;
}
