import { AuthServiceService } from './../auth-service.service';
import {Subscription} from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  title="To Do list"

  userIsAuthenticated=false;
  private authListenerSubs:Subscription;

  constructor(private AuthServiceService:AuthServiceService) { }

  ngOnInit() {
    this.authListenerSubs=this.AuthServiceService.getAuthStatusListener().subscribe(isAuthenticated =>{
      this.userIsAuthenticated=isAuthenticated;
    });
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
