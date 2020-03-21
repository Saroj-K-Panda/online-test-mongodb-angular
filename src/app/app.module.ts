import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
/* import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { LoadTestComponent } from './components/load-test/load-test.component';
import { ExamReportsComponent } from './components/exam-reports/exam-reports.component';
import { CandidateProfileService } from './services/candidate-profile.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidateProfileComponent,
    InstructionsComponent,
    LoadTestComponent,
    ExamReportsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,   
    AngularFontAwesomeModule,
    FormsModule,
  /*   NgbModule, */
    RouterModule.forRoot([
      { path: 'login',component:LoginComponent},
      {path:'create-profile',component:CandidateProfileComponent},
      {path:'instructions',component:InstructionsComponent},
      {path:'loadTest',component:LoadTestComponent},
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
