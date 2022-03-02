import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({});
  public passwordType: 'visibility' | 'visibility_off' = 'visibility';

  private return: string = '';

  constructor(
    private readonly authService: AuthService,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/home');
  }

  login() {
    if (this.loginForm.invalid)
      return this.loginForm.markAllAsTouched();

    this.authService
      .login(this.loginForm.value)
      .pipe(take(1))
      .subscribe((response) => {
        sessionStorage.setItem('user', JSON.stringify(response));
        this.router.navigateByUrl(this.return);
      });
  }

  tooglePasswordVisibility() {
    this.passwordType = this.passwordType === 'visibility'?
    'visibility_off' : 'visibility'
  }
}
