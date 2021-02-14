import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { NgcontentExampleComponent } from './ngcontent-example/ngcontent-example.component';
import { BackgroundYellowDirective } from './shared/background-yellow.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlighterDirective } from './shared/highlighter.directive';
import { NgelseDirective } from './shared/ngelse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    ElvisOperatorComponent,
    NgcontentExampleComponent,
    BackgroundYellowDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective,
    HighlighterDirective,
    NgelseDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
