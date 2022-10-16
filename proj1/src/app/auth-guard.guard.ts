import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MsgsharingService } from 'src/app/modules/service/msgsharing/msgsharing.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private _msgSharing: MsgsharingService, private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if (this._msgSharing.getAuth()) {
      return this._msgSharing.getAuth()
    }
    else {
      this._router.navigate([""])
      return false
    }

  }

}
