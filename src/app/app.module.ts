import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollabComponent } from './collab/collab.component';
import { InformationComponent } from './information/information.component';
import { ProductionComponent } from './production/production.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { RemixComponent } from './remix/remix.component';
import { OriginalComponent } from './original/original.component';

/*ROUTE */
import { RouterModule, Routes } from '@angular/router';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/*LINK*/
const appRoutes: Routes = [
  {path:'home' ,       component:HomeComponent},
  {path:'collab' ,     component:CollabComponent},
  {path:'infomation' , component:InformationComponent},
  {path:'production' , component:ProductionComponent} ,
  {path:'remix' ,      component:RemixComponent },
  {path:'original' ,   component:OriginalComponent },
  {path:'knowledge' , component:KnowledgeComponent},
  {path:'' ,           redirectTo:'/home' , pathMatch:'full'},
  {path:'**' ,         component:PagenotfoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollabComponent,
    InformationComponent,
    ProductionComponent,
    PagenotfoundComponent,
    KnowledgeComponent,
    RemixComponent,
    OriginalComponent,
    HeaderMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
