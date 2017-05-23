import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MdTabsModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MdTabsModule,
    MdToolbarModule,
    RouterModule,
    CommonModule
  ],
  declarations: [HeaderComponent],
  exports : [HeaderComponent]
})
export class CoreModule {
}
