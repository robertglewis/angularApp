import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { MembersComponent } from './members.component';


@NgModule({
  declarations: [
    
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [MembersComponent]
})
export class AppModule { }
