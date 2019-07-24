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
    data: { breadcrumb: '容器' },
    children:
    [
      { path: 'button', component: ButtonComponent, data: { breadcrumb: '按钮' }},
      { path: 'icon', component: IconComponent, data: { breadcrumb: '图标' }},
      { path: 'button/hello', component: ButtonHelloComponent, data: { breadcrumb: 'helloworld' } },
      { path: 'icon/hello', component: IconHelloComponent, data: { breadcrumb: 'helloworld' } },
      { path: 'typography', component: TypographyComponent, data: { breadcrumb: '排版' }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutes { }
