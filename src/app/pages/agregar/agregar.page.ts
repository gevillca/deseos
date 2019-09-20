import { ListaItem } from './../../models/lista-item.model';
import { Lista } from './../../models/lista.model';
import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss']
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = '';
  constructor(
    private deseoService: DeseosService,
    private route: ActivatedRoute
  ) {
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = deseoService.obtenerLista(listaId);
    // console.log(this.lista);
  }
  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseoService.guardarStorage();
  }
  cambioCheck(item: ListaItem) {
    const pendiente = this.lista.items.filter((itemData) => !item.completado)
      .length;

    if (pendiente === 0) {
      this.lista.TerminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.TerminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseoService.guardarStorage();
    console.log(this.deseoService.listas);
  }

  ngOnInit() {}
}
