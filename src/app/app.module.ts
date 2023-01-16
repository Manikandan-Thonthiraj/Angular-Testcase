import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { ApiService } from './services/api.service';
import { ApiTestbedService } from './services/api-testbed.service';
import { ClickBgcolorChangeDirective } from './directives/click-bgcolor-change.directive';
import { MouseBgcolorChangeDirective } from './directives/mouse-bgcolor-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    UsersComponent,
    ClickBgcolorChangeDirective,
    MouseBgcolorChangeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService, ApiTestbedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
