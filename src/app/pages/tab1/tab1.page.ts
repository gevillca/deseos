import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    public deseoService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async agregarLista() {
    // const alert= await this.alertCtrl.create

    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
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
          text: 'Crear',
          handler: (data) => {
            if (data.length === 0) {
              return;
            }
            const listaId = this.deseoService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });

    await alert.present();
  }
}
