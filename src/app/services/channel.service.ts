import { Injectable } from '@angular/core';
import { DependServiceService } from './depend-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private dService: DependServiceService) { 
    console.log(dService.log());
    
  }

  display(){
    return "Welcome to Angular"
  }

  getValue(value: string){
    console.log('Service class: '+value);

  }

}
