import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MsgsharingService } from 'src/app/modules/service/msgsharing/msgsharing.service';

@Component({
  selector: 'orderfood-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.scss']
})
export class FooditemsComponent implements OnInit {
  @Input() fooddata: any;
  @Output() sendtext = new EventEmitter();
  constructor(private _msgSharing: MsgsharingService) { }

  ngOnInit(): void {
  }
  /**
   * 
   * @param description 
   */
  showDescription=(description:any)=>{
    this.sendtext.emit(description);
  }

  showOffers=()=>{
    this._msgSharing.sendValue(this.fooddata);
    window.console.log(this.fooddata)
  }

}
