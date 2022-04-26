import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  name = 'Timfa';

  product = { name: 'banana', price: 15.99 };

  html = '<p><b>Hello Dounia</b></p><script>alert("Boum")</script>';

  source = 'assets/images/Fatimata.jpg';

  message?: string;

  users = ['Oumou', 'Fatimata', 'Aicha', 'Bambi'];
  constructor() {}

  ngOnInit(): void {}

  clicked(): void {
    alert('hello dounia');
  }

  confirm(event: MouseEvent): void {
    console.log(event);
    if (confirm('est vous sur')) {
      event.preventDefault();
    }
  }

  getMessageValue(): void {
    alert(this.message);
  }
}
