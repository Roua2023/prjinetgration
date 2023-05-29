import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z.]{2,15}$')]],
      password : ['',[Validators.required,Validators.maxLength(8)]]
    })
  }
  public get emaillogin(){
    return this.loginForm.get('email');
  }
  public get passwordlogin(){
    return this.loginForm.get('password');
  }

}
