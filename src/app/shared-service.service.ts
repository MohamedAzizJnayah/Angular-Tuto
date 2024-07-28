import { Injectable } from '@angular/core';
import { usr } from './usr.model';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }
  cards:usr[]=[];
  
}
