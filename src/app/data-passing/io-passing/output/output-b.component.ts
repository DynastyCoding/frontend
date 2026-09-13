import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output-b.component.html',
})
export class OutputBComponent {

  userData = {name: '', email: '',address: '' };
  myOutput = output<{name: string, email: string,address: string}>();
  sendData(){
    this.myOutput.emit(this.userData);
  }
}
