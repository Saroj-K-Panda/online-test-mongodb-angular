import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from "@angular/forms";
/*  import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';  */
import { Observable, throwError } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  data;
  validatedata;
  Url: "";
  building: '';
  modalVisible = false;

  constructor(public LoginService: LoginService,
    private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      "Email": ['', Validators.required],
      "Password": ['', Validators.required]
    });
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  onClose(isVisible: boolean) {
    this.modalVisible = isVisible;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    console.log(this.loginForm.value);
    let postData: any = {
      "Email": this.loginForm.value.Email,
      "Password": this.loginForm.value.Password
    }

  } catch(e) {
    console.log(e);
  }
}
