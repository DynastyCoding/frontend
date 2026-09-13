import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './input-b.component.html',
})
export class InputBComponent {
  @Input() userName: string = '';
  @Input() userEmail: string = '';
  @Input() userAddress: string = '';
}
