import { Component } from '@angular/core';
import { usr } from '../usr.model';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent  {
  constructor(public shared:SharedServiceService , public user:usr){}
card:user={
  name:'',
  power:'',
  img:''

};
Add(){
  this.shared.cards.push(this.card);
  //reinitialisation de l objet card
    this.card={ name:'',
      power:'',
      img:''};
      
}
}
