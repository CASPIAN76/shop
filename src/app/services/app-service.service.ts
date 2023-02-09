import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {



constructor() { }
cartItemList:any=[];

public productList = new BehaviorSubject<any>([]);


//get product data
 getProduct(){
   return this.productList.asObservable();
 }


 // set product data
 setProduct(product:any){
   this.cartItemList.push(product);
   this.productList.next(product)
 }

 //add product in cart
addToCart(product:any){
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.totalPrice();
   console.log(product)
}


//get total price of item
totalPrice():number{
let totalAMT=0
  this.cartItemList.map((a:any)=>{
  totalAMT += a.total;
  });
  return  totalAMT
}
// remove all cart data
removeCartItem(product:any){
this.cartItemList.map((a:any,index:any)=>{
if(product.id ===a.id){
  this.cartItemList.splice(index,1)

}
})
// to remove
 this.productList.next(this.cartItemList)

}

removeAllCART(){
  this.cartItemList=[];
  this.productList.next(this.cartItemList)
}



































}
