/*import { AuthServiceService } from './../auth-service.service';
*/import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { ValidateService } from 'src/app/auth/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading=false;

  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService) { }
/*
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
/*    this.isLoading = true;
  *//*  this.authService.createUser(form.value.fullname, form.value.email, form.value.password, form.value.phone);
}*/
  

onRegisterSubmit(){
  const user={
    name:this.name,
    username:this.username,
    email:this.email,
    password:this.password
  };

  //Required Fields
  if(!this.validateService.validateRegister(user)){
    this.flashMessage.show("please fill in all fields",{
      cssClass:'alert-danger',
      timeout:3000
    });
    return false;
  }
  if(!this.validateService.validateEmail(user.email)){
    this.flashMessage.show("Enter valid email address",{
      cssClass:'alert-danger',
      timeout:3000
    });
    return false;
  }

  //register user
  this.authService.register(user).subscribe(res=>{
    if(res){
      console.log(res);
      this.flashMessage.show("You are now Registered",{
        cssClass:'alert-success',
        timeout:3000
      });
    }
    else{

    }
  })
}


  ngOnInit() {
  }

}
