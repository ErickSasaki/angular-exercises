import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { NumberCounterComponent } from './number-counter/number-counter.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    NumberCounterComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
