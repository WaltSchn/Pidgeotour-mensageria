import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/authServices/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

    user = new User();
    loginForm: FormGroup | any
    registerForm: FormGroup | any
    cadastroView: boolean = false

    constructor(
      private authService: AuthService,
      private formBuilder: FormBuilder,
      private activeModal: NgbActiveModal,
      ) {}

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
      this.registerForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
    }


    cadastroViewChange() {
      this.loginForm.markAsPristine();
      this.cadastroView = !this.cadastroView;
      this.user.userName = ''
      this.user.password = ''
      this.loginForm.reset()
      this.registerForm.reset()
    }

    register() {
      this.user.userName = this.registerForm.get('userName').value
      this.user.password = this.registerForm.get('password').value
      this.authService.register(this.user).subscribe(res => {
        if (res) {
          this.authService
          .login(this.user)
          .subscribe(
            {
              next: (token: string) => {
                localStorage.setItem('authToken', token)
                this.activeModal.close()
                window.location.reload()
              }
            }
          )
        }

    })
    }

    login() {
      this.user.userName = this.loginForm.get('userName').value

      this.user.password = this.loginForm.get('password').value

      this.authService
      .login(this.user)
      .subscribe(
        {
          next: (token: string) => {
            localStorage.setItem('authToken', token)
            this.activeModal.close()
            window.location.reload()
          },
          error: (err) => {
            alert("Não foi possível concluir login. Verifique usuário e senha!")
            this.user.userName = ''
            this.user.password = ''
            this.loginForm.reset()
            this.registerForm.reset()
          }
        }
      )
    }




    getName() {
      this.authService.getName().subscribe((name: string) => {
        //console.log(name)
      })
    }


  }

