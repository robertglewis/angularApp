import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(private http: HttpClient){
  }
  httpdata;
  ngOnInit(): void {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
      console.log(data);
      this.displaydata(data);
    });
  }
  displaydata(data) {this.httpdata = data}
}
