import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate1',
  templateUrl: './plate1.component.html',
  styleUrls: ['./plate1.component.css']
})
export class Plate1Component implements OnInit {

  @Input() productId : any

  constructor() { }

  ngOnInit(): void {
  }

}
