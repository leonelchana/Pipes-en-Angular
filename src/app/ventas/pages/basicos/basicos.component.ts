import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

nombreLower:string='leonel';
nombreUpper:string='LEONEL';
nombreCompleto:string ='lEoNel cHanA';
fecha:Date=new Date();

}
