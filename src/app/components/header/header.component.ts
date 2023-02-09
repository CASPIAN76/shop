
import { Component, OnInit } from '@angular/core';

import { AppServiceService } from '../../services/app-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private _cartServices:AppServiceService) { }
 counter=0
  ngOnInit(): void {

  this._cartServices.getProduct().subscribe(res=>{

    this.counter= res.length
  })

  }





}
