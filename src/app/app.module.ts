import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignModule } from 'app/shared/design/design.module';
import { CoreModule } from 'app/core/core.module';
import { FeedsModule } from 'app/feeds/feeds.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    DesignModule.forRoot(),
    CoreModule,
    BrowserAnimationsModule,
    FeedsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
