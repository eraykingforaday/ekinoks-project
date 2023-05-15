import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OturumService } from './oturum.service';



@Component({
  selector: 'app-kayit-oturum',
  template: `
  <h2>Kayıt Ol</h2>
  <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
    <div>
      <label for="username">Kullanıcı Adı:</label>
      <input type="text" id="username" name="username" [(ngModel)]="username" required>
    </div>
    <div>
      <label for="email">E-posta:</label>
      <input type="email" id="email" name="email" [(ngModel)]="email" required>
    </div>
    <div>
      <label for="password">Şifre:</label>
      <input type="password" id="password" name="password" [(ngModel)]="password" required>
    </div>
    <button type="submit">Kayıt Ol</button>
  </form>
`,
  styleUrls: ['./kayit-oturum.component.css']
})
export class KayitOturumComponent {
  username: string;
  email: string;
  password: string;

  constructor(private authService: OturumService, private router: Router) { }

  onSubmit() {
    this.authService.register(this.username, this.password, this.email).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
