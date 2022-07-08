import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  isClicked: number;
  prodId: number;

  constructor() { }

  ngOnInit(): void {
  }

  
  isclicked($event: any){
  this.isClicked= $event;
  }

  receiveMessage($event: any){
    this.prodId= $event;
    console.log(this.prodId);
    }

}
