import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';
import { ButtonHelloComponent } from './button/button-hello/button-hello.component';
import { IconHelloComponent } from './icon/icon-hello/icon-hello.component';
import { IconComponent } from './icon/icon.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutes { }
