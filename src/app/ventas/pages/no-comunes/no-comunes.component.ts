import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nselect
nombre :string='Leonel';
genero:string='masculino';
invitacionMapa={
  'masculino':'invitarlo',
  'femenino':'invitarla'
}

cambiarCliente(){
  this.nombre='Maria';
  this.genero='femenino'  
  }
//i18nPlural
clientes:string[]=[ 'Maria','pedro','juan' ]
clientesMapa={
  '=0':'no tenemos  ningun cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  'other':'tenemos # clientes esperando.'
}
borrarCliente(){
  this.clientes.splice(-1,1);
}
//keyValue Pipe

persona={
  nombre:'Maria',
  edad:'35',
  direccion:'Santa Cruz,Bolivia'

}

//Json Pipe
heroes=[{
  nombre:'Superman',
  vuela:true,
},
{
  nombre:'Robin',
  vuela:false

},
{nombre:'Aquaman',
vuela:true}
]


//Async Pipe
valorPromesa=new Promise((resolve,rejecct)=>{
  setTimeout(()=>{
    resolve('Tenemos data de promesa');
  },3500);
})
miObservable=interval(1000);

}

