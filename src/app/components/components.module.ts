import { IonicModule } from '@ionic/angular';
import { ListasComponent } from './listas/listas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListasComponent],
  exports: [ListasComponent],
  imports: [CommonModule, IonicModule]
})
export class ComponentsModule {}
