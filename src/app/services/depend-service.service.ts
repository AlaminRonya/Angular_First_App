import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependServiceService {

  message = 'My service data'
  constructor() { }

  log(){
    return this.message;
  }
}
