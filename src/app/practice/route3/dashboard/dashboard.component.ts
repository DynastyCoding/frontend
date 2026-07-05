import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  username: string = '';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.username = this.route.snapshot.queryParamMap.get('name')||'訪客';
  }

}
