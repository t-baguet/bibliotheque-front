import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  token: string;

  constructor() { 
    this.token = '';
  }
}
