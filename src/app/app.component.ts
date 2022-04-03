import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Főoldal', url: 'main', icon: 'home' },
    { title: 'Macskák', url: '/cats', icon: 'assets/icons/cat-icon.png' },
    { title: 'Kutyák', url: '/dogs', icon: 'dog' },
    { title: 'Rólunk', url: '/about', icon: 'about' },
    { title: 'Bejelentkezés', url: '/login', icon: 'login' },
    { title: 'Kijelentkezés', url: '/logout', icon: 'logout' }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public auth: AuthService) {}
}
