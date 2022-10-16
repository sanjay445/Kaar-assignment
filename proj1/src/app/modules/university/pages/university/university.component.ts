/**
 * Import
 */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { MsgsharingService } from 'src/app/modules/service/msgsharing/msgsharing.service';
/**
 * Component
 */
@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
/**
 * University Component
 */
export class UniversityComponent implements OnInit {

  uniunsubsribe!: Subscription;
  output: any = [];
  loading = true;
  constructor(private _http: HttpClient, private _msgSharing: MsgsharingService) { }


  /**
   *Oninit
   */
  async ngOnInit() {
    /*---------------------------------------------------------------------------*/
    //Example for Promise.all()
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then((values) => {
      console.log(values);
    });
    // expected output: Array [3, 42, "foo"]
    /*---------------------------------------------------------------------------*/
    try {
      this.output = await this.getUniversities();
      console.log(this.output)
    }
    catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * Gets University datas 
   */
  getUniversities = () => {
    return new Promise((resolve, reject) => {
      this.uniunsubsribe =
        this._msgSharing.getUnivdetails().subscribe(
          {
            next: (res) => {
              resolve(res);
              this.loading = false;
            },
            error: (err) => {
              reject(err)
            }
          });
    })
  }
  /**
   * Used For Unsubscribe
   */
  ngOnDestroy() {
    this.uniunsubsribe.unsubscribe()
  }

}

