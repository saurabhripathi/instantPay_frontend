import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { AddUserComponent } from './components/dashboard/add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/dashboard/add-task/add-task.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgPrimeModule } from './shared/ng-prime/ng-prime.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    AddUserComponent,
    AddTaskComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    NgPrimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
