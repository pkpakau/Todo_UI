import { Component, OnInit } from '@angular/core';
import { DblistService } from '../dblist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  list: Object;

  x:addlist={inp_list:""};

  constructor(private data: DblistService) { }

  ngOnInit() {
    this.data.getlist().subscribe(data => {
        this.list = data;
        console.log(this.list);
      }
    );
  }
  
}


export class addlist{
  inp_list:string;
}