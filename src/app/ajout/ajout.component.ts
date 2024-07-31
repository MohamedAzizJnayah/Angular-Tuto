import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {
  constructor(public shared:SharedServiceService){}
hero={name:'',power:'',img:'',}
Add(){
  this.shared.heros.push(this.hero);
  this.hero={name:'',power:'',img:'',}
}
}
