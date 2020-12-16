import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { HttpClientModule } from '@angular/common/http';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { ConsultantComponent } from './consultant-list/consultant/consultant.component';
import { EffectsModule } from '@ngrx/effects';
import { ConsultantsEffects } from './store/consultants/effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConsultantListComponent,
    ConsultantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(appReducers),
    HttpClientModule,
    EffectsModule.forRoot([ConsultantsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
