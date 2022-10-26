import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../layout/layout.component';
import { adminRouting } from './admin.routing';
import { ListorderComponent } from '../../pages/listorder/listorder.component';
import { ListuserComponent } from '../../pages/listuser/listuser.component';
import { QldtComponent } from '../../pages/qldt/qldt.component';
import { AddproductComponent } from '../../pages/addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    ListorderComponent,
    ListuserComponent,
    QldtComponent,
    AddproductComponent
  ],
  imports: [
    CommonModule,
    adminRouting,
    FormsModule,
    
    
  ]
})
export class AdminModule { }
