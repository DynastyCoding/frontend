import { ExampleService } from '../../../core/services/example.service';
import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  private exampleService: ExampleService = inject(ExampleService);

  userName = '';

  constructor(){
    this.userName = this.exampleService.userName;
  }

  @Input() value: string = '';

}

