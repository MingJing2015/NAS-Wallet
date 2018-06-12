import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { CardDetailsComponent } from './cards/card-details/card-details.component';
import { CardListComponent } from './cards/card-list/card-list.component';

import { HttpModule } from '@angular/http';
import { WalletDetailsComponent } from './wallets/wallet-details/wallet-details.component';  // For remote service, can not use HttpClientModule ?

import { FileUploadModule } from 'ng2-file-upload';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent,
    CardDetailsComponent,
    CardListComponent,
    WalletDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,      
    HttpClientModule,
    FileUploadModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
