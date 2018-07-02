import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './containers/creator/creator.component';
import { AbilitiesFormComponent } from './components/abilities-form/abilities-form.component';
import { ClassFormComponent } from './components/class-form/class-form.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';

@NgModule({
  imports: [
    CommonModule,
    CreatorRoutingModule
  ],
  declarations: [CreatorComponent, AbilitiesFormComponent, ClassFormComponent, CreateCharacterComponent]
})
export class CreatorModule { }
