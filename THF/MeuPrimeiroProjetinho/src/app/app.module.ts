import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';
import { RouterModule } from '@angular/router';
import { ComptesteComponent } from './compteste/compteste.component';
import { ThfComponentsModule } from '@totvs/thf-templates';

@NgModule({
  declarations: [
    AppComponent,
    ComptesteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThfModule,
    ThfComponentsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
