import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  Name = 'Hari Karan';
  Phone="97901233";
  Password="sgmlsdfg";
  Confirmpassword="dsgasdgdg";

  Save(){
    var objSave={
Name:this.Name,
Phone:this.Phone,
Password:this.Password,
Confirmpassword:this.Confirmpassword
  
  
    }
  this.SendToServer(objSave)
  }

  SendToServer(objSave:any){

      alert(objSave.Name)
  alert(objSave.Phone)
  alert(objSave.Confirmpassword)
    
  }
}
