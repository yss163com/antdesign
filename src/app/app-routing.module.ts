import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonHelloComponent } from './components/button/button-hello/button-hello.component';
import { IconHelloComponent } from './components/icon/icon-hello/icon-hello.component';
import { ComponentsComponent } from './components/components.component';
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
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'customize-theme', component: CustomizeThemeComponent },
      {
        path: 'components',
        component: ComponentsComponent,
        children:
        [
          { path: 'button', component: ButtonComponent },
          { path: 'icon', component: IconComponent },
          { path: 'button/hello', component: ButtonHelloComponent },
          { path: 'icon/hello', component: IconHelloComponent },
          { path: 'typography', component: TypographyComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
