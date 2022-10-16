import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsgsharingService } from 'src/app/modules/service/msgsharing/msgsharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './infinitescroll.component.html',
  styleUrls: ['./infinitescroll.component.scss']
})
export class InfinitescrollComponent implements OnInit {
  start = 0;
  limit = 10;
  constructor(private http: HttpClient, private _msgSharing: MsgsharingService) {
  }
  allpost: any;
  
  // load the Initial 10 posts
  ngOnInit() {
    return this._msgSharing.getScrolldet(this.start, this.limit).subscribe(data => {
      console.log(data);
      this.allpost = data;
    });
  }
  // load th next 10 posts on Scrolling
  onScroll() {
    this.start += 10;
    return this._msgSharing.getScrolldet(this.start, this.limit).subscribe(data => {
      console.log(data);
      this.allpost = this.allpost.concat(data);
    });
  }
  }
 