import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListPage } from './list.page';
import { Routes, RouterModule } from '@angular/router';
import { BackendService } from 'src/services/backend.service';
import { AddModalComponent } from './add-modal/add-modal.component';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListPage, AddModalComponent],
  providers: [BackendService]
})
export class ListPageModule { }
