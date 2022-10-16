import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MsgsharingService } from 'src/app/modules/service/msgsharing/msgsharing.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(
    private _msgSharing: MsgsharingService,
    private fb: FormBuilder,
    private _router: Router
  ) { }
  response = " ";
  username = "";
  password = "";
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }
    );
  }

  onSubmit() {
    console.log(this.registerForm.value.username);
    console.log(this.registerForm.value.password);
    if (this.registerForm.value.username == "" || this.registerForm.value.password == "") {
      if (this.registerForm.value.username == "") {
        this.password = "";
        this.response = "Username is Required";
      }
      else {
        this.response = "";
        this.password = "Password required";
      }
    }
    else {
      this.response = "";
      this.password = "";
      if (this.registerForm.value.username == "sanjay" && this.registerForm.value.password == "123") {
        this._msgSharing.getBool();
        Swal.fire('Success', 'Login Successfull.', 'success')
        this._router.navigate(['/loginSuccess/university']);
      }
      else if (this.registerForm.value.username != "sanjay") {
        this.response = "Invalid User";

      }
      else {
        this.response = "Password Error";
      }


    }
  }

}
