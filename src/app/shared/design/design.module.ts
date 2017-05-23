import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
  ],
  declarations: []
})
export class DesignModule {
  static forRoot(){
    return {
      ngModule : DesignModule,
      imports : [
        MaterialModule
      ]
    };
  }
 }
