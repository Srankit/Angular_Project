import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dog Adda!';
  darkTheme = false;

  toggleDarkTheme(): void {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }
  }
