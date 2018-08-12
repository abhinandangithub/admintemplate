import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLeftSidebarComponent } from './main-templates/app-left-sidebar/app-left-sidebar.component';
import { AppSidebarComponent } from './main-templates/app-sidebar/app-sidebar.component';
import { AppContentComponent } from './main-templates/app-content/app-content.component';
import { AppHeaderComponent } from './main-templates/app-header/app-header.component';
import { AppFooterComponent } from './main-templates/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLeftSidebarComponent,
    AppSidebarComponent,
    AppContentComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
