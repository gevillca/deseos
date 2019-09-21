import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';

import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {
  @Input() terminada = true;

  constructor(public deseoService: DeseosService, private router: Router) {}

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    // console.log(lista);
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }
  borrarLista(lista: Lista) {
    this.deseoService.borrarLista(lista);
    console.log('borrado correctamente');
  }
}
