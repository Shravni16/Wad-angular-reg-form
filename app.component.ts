import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterCompComponent } from './register-comp/register-comp.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterCompComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myNewApp';
}
