import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
constructor(public shared:SharedServiceService){}
Remove(name:string){
   this.shared.heros=this.shared.heros.filter(hero=>hero.name!=name);
}
}
