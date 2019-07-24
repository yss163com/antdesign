import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { CustomizeThemeComponent } from './customize-theme/customize-theme.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'navbar',
    component: NavBarComponent,
    children:
    [
      { path: '', redirectTo: 'components', pathMatch: 'full' },
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'customize-theme', component: CustomizeThemeComponent },
      { path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
