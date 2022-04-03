import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Főoldal', url: 'main', icon: 'home' },
    { title: 'Macskák', url: '/cats', icon: 'cat' },
    { title: 'Kutyák', url: '/dogs', icon: 'dog' },
    { title: 'Rólunk', url: '/about', icon: 'about' }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
