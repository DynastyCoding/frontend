import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
})
export class BComponent {
  @Input() userName: string = '';
  @Input() userEmail: string = '';
  @Input() userAddress: string = '';
}
