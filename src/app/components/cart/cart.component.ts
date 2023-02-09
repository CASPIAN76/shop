import { AppServiceService } from '../../services/app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor( private _appservices :AppServiceService ) { }

  product:any=[];

  grantTotal:number=0;
  ngOnInit(): void {

    this._appservices.getProduct().subscribe((res:any)=>{
      this.product= res;
      this.grantTotal= this._appservices.totalPrice();

      console.log(this.product);
    //  console.log(this.allProduct)


    })
  }

  delete_added_prodduct(it:any){
    this._appservices.removeCartItem(it)
  }
  deleteall_added_produc(){
 this._appservices.removeAllCART()
  }

}
