import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IoComponent } from './io.component'; 
import { NavMenuComponent} from './nav-menu.component'
import { studentsComponent } from './students.component';


//const routes: Routes = [];

export const loginRouting: Routes = 
[
  {
    children: [
      {
        path: 'io',
        component: IoComponent
      }
      ,
      {
        path: 'NavMenu',
        component: NavMenuComponent
      }
      ,
      {
        path: 'student',
        component: studentsComponent
      }
    ] 
  }  
    
];

 
@NgModule({
  imports: [RouterModule.forRoot(loginRouting)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
