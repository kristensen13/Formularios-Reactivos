import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Willy',
    apellido: 'Loayza',
    email: 'will@gmail.com',
    pais: 'ECU',
  };

  paises: any[] = [];
  constructor(private paisSvc: PaisService) {}

  ngOnInit(): void {
    this.paisSvc.getPaises().subscribe((paises) => {
      this.paises = paises;
      this.paises.unshift({
        nombre: '[Selecciona País]',
        codigo: '',
      });
      //console.log(this.paises);
    });
  }

  guardar(forma: NgForm) {
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        control.markAllAsTouched();
      });
      return;
    }
    console.log(forma.value);
  }
}
