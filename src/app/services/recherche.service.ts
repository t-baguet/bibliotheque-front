import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { services } from 'src/environments/services';
import { AuthentificationService } from './authentification.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Album } from '../bean/album.model';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  private environment = environment;

  resultatAlbumOnChanged: BehaviorSubject<Album[]>;

  constructor(private _httpClient: HttpClient,
              private _authentificationService: AuthentificationService) { 

                this.resultatAlbumOnChanged = new BehaviorSubject(new Array<Album>());
              }


  rechercherAlbums(nomRecherche: string): Promise<any[]> {
    return new Promise((resolve, reject) => {

      const header = new HttpHeaders().set('Access-Control-Allow-Origin', environment.serverUrl);
      header.set('Access-Control-Request-Headers', 'content-type');
      header.set('Access-Control-Request-Method', 'POST');

      const requestData ={
        nomRecherche: nomRecherche,
        token: this._authentificationService.token
      };

      const url = environment.serverUrl + services.rechercherAlbumParAlbum;

      return this._httpClient.post(url, requestData, {headers: header})
            .subscribe((reponse: any) => {
              let listeAlbum = new Array<Album>();
              reponse.listeAlbums.forEach((album: any) => {
                listeAlbum.push(new Album(album))
              });
              this.resultatAlbumOnChanged.next(listeAlbum);
            }, reject);
    });
  }

}
