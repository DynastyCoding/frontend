import { InputBComponent } from './input-b.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [FormsModule, InputBComponent],
  templateUrl: './input-a.component.html',
})
export class InputAComponent {
  name = '';
  email = '';
  address = '';
}
