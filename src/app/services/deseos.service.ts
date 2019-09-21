import { Lista } from 'src/app/models/lista.model';
// import { Tab2Page } from './../pages/tab2/tab2.page';
// import { Tab1Page } from './../pages/tab1/tab1.page';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista[] = [];
  tit: string;
  constructor() {
    this.cargarStorage();
  }
  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find((listaData) => listaData.id === id);
  }
  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }
  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }
  borrarLista(lista: Lista) {
    this.listas = this.listas.filter((listaData) => listaData.id !== lista.id);
    this.guardarStorage();
  }
  // editarTitulo(id: number) {
  //   this.listas.filter((listaData) => {
  //     if (listaData.id === id) {
  //       this.tit = listaData.titulo;
  //     } else {
  //       this.tit = 'rueb';
  //     }
  //   });
  //   // console.log(lista.titulo);
  //   console.log(this.tit);
  // }
}
