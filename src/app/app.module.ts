import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

// Import My Components from Index
import { AboutComponent, CareerComponent, ContactComponent, HeaderComponent, HomeComponent, NavComponent, NavSvgComponent, ModalComponent, PortfolioComponent, SkillsComponent, SocialMediaIconsComponent, TaglineSvgComponent} from './index';

// Service class
import {ProjectsService} from './services/projects.service';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CareerComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    NavSvgComponent,
    PortfolioComponent,
    SkillsComponent,
    SocialMediaIconsComponent,
    TaglineSvgComponent,
    ModalComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far,fab);
  }
}
