import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  getDuration(start: number, end: number | null): string {
  if (end === null) return '~ 現在';
  return `${end - start} 年`;

    /*getTopSkills() {
      return this.skills.filter(s => s.percent >= 70);
    }*/

  }

}
