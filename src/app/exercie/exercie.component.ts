import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercie',
  templateUrl: './exercie.component.html',
  styleUrls: ['./exercie.component.css'],
})
export class ExercieComponent implements OnInit {
  tasks: string[] = [];
  task?: string;
  constructor() {}

  ngOnInit(): void {}

  add(): void {
    if (undefined !== this.task?.trim()) {
      this.tasks.push(this.task);
    }
  }

  delete(index: number): void {
    this.tasks.splice(index, 1);
  }
}
