import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Christian';
  genero: string = 'masculino'
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarNombre(){
    this.nombre = 'Carolina',
    this.genero = 'femenino'
  }

  //i18nPlural
  clientes: string[]=['Christian', 'Javier', 'Carmen', 'Luis', 'Alberto']

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  eliminarCliente(){
    this.clientes.pop();
  }


  //keyValuePipe

  persona = {
    nombre: 'Christian',
    edad: 28,
    direccion: 'Avda Mcal Lopez'
  }

  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Thor',
      vuela: true
    },
    {
      nombre: 'Wonder Woman',
      vuela: true
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPomesa = new Promise( (resolve, reject) => {

    setTimeout(()=>{
      resolve('fin de la promesa')
    },3000);

  });



}
