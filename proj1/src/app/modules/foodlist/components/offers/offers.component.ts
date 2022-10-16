import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MsgsharingService } from 'src/app/modules/service/msgsharing/msgsharing.service';

@Component({
  selector: 'orderfood-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  
  fooddetails : any;
  offerdetails : any;
  discountPrice : any;
  constructor(private _msgSharing: MsgsharingService) { }

  ngOnInit(): void {
    this._msgSharing.getValue().subscribe(data =>{
      this.fooddetails = data;
      this.offerdetails = this.fooddetails.offers;
      this.discountPrice = 1 - this.offerdetails/100 ;
    })
  }
}
