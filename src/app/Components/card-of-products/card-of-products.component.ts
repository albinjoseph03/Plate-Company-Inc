import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-of-products',
  templateUrl: './card-of-products.component.html',
  styleUrls: ['./card-of-products.component.css']
})
export class CardOfProductsComponent implements OnInit {
  productId: any;
  infoFlag: boolean;
  message: number = 1;
  

  constructor() { }

  @Output() event = new EventEmitter<number>()
  @Output() event1 = new EventEmitter<number>()

  ngOnInit(): void {
      this.infoFlag=false;
    }

    sendMessage(){
      this.event.emit(this.message);
    }
    sendProductId(){
      this.event1.emit(this.productId);
    }


    getProdInfo1(){
      this.productId = 1;
      console.log(this.productId)
      this.infoFlag=true;
      this.sendMessage();
      this.sendProductId();
    }
    getProdInfo2(){
      this.productId = 2;
      this.infoFlag=true;
      this.sendMessage();
      this.sendProductId();
    }
    getProdInfo3(){
      this.productId = 3;
      this.infoFlag=true;
      this.sendMessage();
      this.sendProductId();
    }
    getProdInfo4(){
      this.productId = 4;
      this.infoFlag=true;
      this.sendMessage();
      this.sendProductId();
    }

  }

