import { Component } from '@angular/core';

@Component({
  selector: 'app-compressed',
  templateUrl: './compressed.component.html',
  styleUrls: ['./compressed.component.scss']
})
export class CompressedComponent {
 constructor() { }

 download() {
    window.location.href = 'http://localhost:5000/download';
    
  }
}
