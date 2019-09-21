import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';

import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {
  @Input() terminada = true;
  @ViewChild(IonList, null) lista: IonList;
  constructor(
    public deseoService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

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
  async editarTitulo(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Editar la lista'
        }
      ],

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

          handler: () => {
            console.log('CAncelar');
          }
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if (data.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseoService.guardarStorage();
            this.lista.closeSlidingItems();
            // const listaId = this.deseoService.crearLista(data.titulo);
            // this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });

    await alert.present();
  }
}
