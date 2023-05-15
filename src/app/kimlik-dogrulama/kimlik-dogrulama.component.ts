import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-kimlik-dogrulama',
  template: `
    <h2>Giriş yap</h2>
    <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
      <div>
        <label for="username">Kullanıcı Adı:</label>
        <input type="text" id="username" name="username" [(ngModel)]="username" required>
      </div>
      <div>
        <label for="password">Şifre:</label>
        <input type="password" id="password" name="password" [(ngModel)]="password" required>
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  `,
  styleUrls: ['./kimlik-dogrulama.component.css']
})
export class KimlikDogrulamaComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(() => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/']);
      }
    });
  }
}
