import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
  MatCardModule,
MatButtonModule,
ReactiveFormsModule,
MatProgressSpinnerModule,
RouterOutlet,RouterLink ,
CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  userDtaFromAPI!:any;
  showSpinner!: Observable<boolean>;

  constructor(private fb:FormBuilder,
    private loaderService:LoadingService,
    private userService: UserService,
    private router: Router
  ){
    this.loginForm = this.fb.group({
      email : ['',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      password: ['',[Validators.required,Validators.minLength(4)]]
    }
    )
  }

  ngOnInit(): void {
      this.showSpinner = this.loaderService.loading$;
  }

  verifyUser(){
    alert(`data: ${this.loginForm.value.email} ${this.loginForm.value.password}`)
    const userEmail = this.loginForm.value.email;
    const userPass = this.loginForm.value.password
    this.userService.getUser().subscribe(res => {
      this.userDtaFromAPI = res;
      this.userDtaFromAPI.forEach((each: any) => {
        if(each.email == userEmail && each.password == userPass){
          this.router.navigate(['/dash'])
        }
      })
    })
    this.loginForm.reset()
  }


}
