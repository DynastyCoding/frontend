import { ExampleService } from '../../../core/services/example.service';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [SecondComponent,FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  //注入Service
  private exampleService = inject(ExampleService);

  sendData(){
    this.exampleService.userName = 'Allen';
  }

  parentName = 'Allen';

}
