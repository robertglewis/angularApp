import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MembersdetailComponent } from './membersdetail.component';


@NgModule({
  declarations: [
    
    MembersdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [MembersdetailComponent]
})
export class AppModule { }
