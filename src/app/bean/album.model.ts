
export class Album
{
    titre: string;
    vignette: string;
    dateSortie: string;
    duree: string;

    

    /**
     * Constructor
     *
     * @param album
     */
    constructor(album: any)
    {
        
        this.titre= album.titre;
        this.vignette= album.vignette;
        this.dateSortie= album.dateSortie;
        this.duree= album.duree;
    }

}
