import { AppServicesService } from './../../APP/app-services.service';
import { Component, OnInit } from '@angular/core';
 import { AppServiceService } from 'src/app/services/app-service.service';





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products:any=[];
 // product: unknown;
  constructor( private _appServise:AppServicesService, private _cartService:AppServiceService) { }

  ngOnInit(): void {

  this._appServise.getallProduct().subscribe(resiult=>{
    this.products =resiult;
   this.products.forEach((a:any) => {
     Object.assign(a,{quantity:1,total:a.price})

   });
  })
  }
  addTOcart(item:any){
    this._cartService.addToCart(item);
  }


































}
