import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
 
  

  constructor(private http: HttpClient){
  }
  id: string;
  httpdata;
  selectedItem;
  ngOnInit(): void {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
      console.log(data);
     // this.displaydata(data);
      //selectedItem: this.httpdata;
      this.httpdata = data;
    });
  }

  
  getID(id){
    //selectedItem: this.httpdata;
    return this.httpdata.find(x => x.id === id);
  }
  
    
  
    
  
 
 

}
