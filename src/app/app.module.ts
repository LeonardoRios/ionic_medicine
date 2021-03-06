import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';

import { RemediosPage } from '../pages/remedios/remedios';
import { FormRemedioPage } from '../pages/form-remedio/form-remedio';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { RemedioService } from '../providers/remedio-service';

@NgModule({
  declarations: [
    MyApp,
    RemediosPage,
    FormRemedioPage,
    DetalhePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RemediosPage,
    FormRemedioPage,
    DetalhePage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, RemedioService, Storage]
})
export class AppModule {}
