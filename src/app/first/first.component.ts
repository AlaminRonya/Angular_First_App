import { Component, OnInit } from '@angular/core';

import{ ChannelService} from '../services/channel.service'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  title = "Angular Title"
  items:any[] = [
    'name',
    "Female",
    'Male'
  ];

  ngOnInit(): void {
    this.f();
  }

  constructor(private nChannel: ChannelService){}

  f(){
    this.nChannel.getValue(this.title);
    return this.title;
  }

  sum(){
    return 20+40;
  }

  message(){
    return this.nChannel.display();
  }

}
