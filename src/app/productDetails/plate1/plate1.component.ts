import { Component, Input, OnInit } from '@angular/core';
import { ProDetailsService } from 'src/app/Services/pro-details.service';
import { Iproduct } from 'src/app/product';
@Component({
  selector: 'app-plate1',
  templateUrl: './plate1.component.html',
  styleUrls: ['./plate1.component.css']
})
export class Plate1Component implements OnInit {

  @Input() productId : any
  public product: Iproduct[];

  constructor(private prodDet: ProDetailsService) { }

  ngOnInit(): void {
    this.prodDet.getDetails()
    .subscribe(data => this.product = data);
    console.log(this.product);
  }

}
