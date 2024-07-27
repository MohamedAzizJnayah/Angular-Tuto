import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent  {
  constructor(){}
usr={
  name:'',
  power:'',
  img:''

};
Add(){
  //reinitialisation de l objet card
    this.usr={ name:'',
      power:'',
      img:''};
}
}
