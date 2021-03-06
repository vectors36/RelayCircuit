import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FullComponent } from './dashboard/layout/full/full.component';
import { HeaderComponent } from './dashboard/layout/full/header/header.component';
import { SidebarComponent } from './dashboard/layout/full/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserMenuComponent } from './dashboard/layout/full/header/user-menu/user-menu.component';
import { SidebarService } from './dashboard/layout/full/sidebar/sidebar.service';
import { AuthGuard } from './dashboard/auth/auth.guard';
import { AuthService } from './dashboard/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [SidebarService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
