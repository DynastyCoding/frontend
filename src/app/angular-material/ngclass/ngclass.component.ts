import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngclass',
  imports: [CommonModule],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.scss'
})

export class NgclassComponent {
  orders: Order[] = [
    { id: 1, customer: '王小明', status: 'pending',   isOverdue: false },
    { id: 2, customer: '陳美玲', status: 'shipped',   isOverdue: true  },
    { id: 3, customer: '林大偉', status: 'completed', isOverdue: false },
    { id: 4, customer: '張雅婷', status: 'cancelled', isOverdue: false },
    { id: 5, customer: '李志豪', status: 'pending',   isOverdue: true  },
  ];

  getRowClass(order: Order): string {
    return order.status === 'cancelled' ? 'row-cancelled' : '';
  }
}

export interface Order{
  id: number;
  customer: string;
  status: 'pending' | 'shipped' | 'completed' | 'cancelled';
  isOverdue: boolean;
}
