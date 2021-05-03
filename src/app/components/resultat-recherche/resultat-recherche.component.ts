import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { RechercheService } from 'src/app/services/recherche.service';
import { takeUntil } from 'rxjs/operators';
import { Album } from 'src/app/bean/album.model';

@Component({
  selector: 'app-resultat-recherche',
  templateUrl: './resultat-recherche.component.html',
  styleUrls: ['./resultat-recherche.component.css']
})
export class ResultatRechercheComponent implements OnInit,OnDestroy {

  // Private
  private _unsubscribeAll: Subject<any>;
  private listeAlbums: Album[];

  constructor(private _rechercheService: RechercheService) { 
    this._unsubscribeAll = new Subject();
    this.listeAlbums = new Array<Album>();
  }

  ngOnInit(): void {
    this._rechercheService.resultatAlbumOnChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe( reponse => {
      this.listeAlbums = reponse;
    });
  }

  ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
