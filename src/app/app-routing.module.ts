import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './component/upload/upload.component';
import { HomeComponent } from './component/home/home.component';
import { CompressedComponent } from './component/compressed/compressed.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'upload', component: UploadComponent },
  { path: 'compressed', component: CompressedComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
