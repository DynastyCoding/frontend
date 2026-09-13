import { Component } from '@angular/core';
import { OutputBComponent } from './output-b.component';

@Component({
  selector: 'app-output',
  imports: [OutputBComponent],
  templateUrl: './output-a.component.html',
})
export class OutputAComponent {
  receivedData = {name: '', email: '', address: ''};

  onReceive(event: {name: string, email: string, address: string}){
    this.receivedData = event;
  }
}
