import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UploadserviceService } from 'src/app/service/uploadservice.service';
interface MyResponse {
  message: string;
}
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
 message: string = '';
file!: File;
  constructor(private http: HttpClient, private uploadservice: UploadserviceService, private route: Router) { }
  ngOnInit(): void {
    this.http.get<MyResponse>('http://localhost:5000/').subscribe((data) => {
      this.message = data.message;
      console.log(this.message);
        
    })
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const imagePreview = document.getElementById('imagePreview');
        if (imagePreview) {
          imagePreview.style.backgroundImage = `url(${reader.result})`;
          imagePreview.style.display = 'none';
          imagePreview.style.display = 'block';

          
        }
      }
      reader.readAsDataURL(input.files[0]);
  
    }
  }
  compress(){
    
   
    this.uploadservice.uploadFile(this.file).subscribe((response: any) => {
      console.log(response);
     
     


    });
    this.route.navigate(['/compressed']);
  }


}
