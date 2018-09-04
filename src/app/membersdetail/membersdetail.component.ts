import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterModule} from '@angular/router';



@Component({
  selector: 'app-membersdetail',
  templateUrl: './membersdetail.component.html',
  styleUrls: ['./membersdetail.component.css']
})
export class MembersdetailComponent implements OnInit {
  
  ID: string;
  Shttpdata;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
      this.route.paramMap.subscribe(params => {this.ID = params.get('id');})
   }

   ngOnInit():void {
    this.http.get("http://jsonplaceholder.typicode.com/users/"+this.ID).subscribe(data => {
      //this.http.get<any>("http://jsonplaceholder.typicode.com/users/"+this.ID).subscribe(data => {
      console.log(data);
      this.Shttpdata = data;
      //this.Shttpdata = data;

      
    });
  }  
}
