import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { ComponentsRoutes } from './components.routing';

import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';
import { ButtonHelloComponent } from './button/button-hello/button-hello.component';
import { IconHelloComponent } from './icon/icon-hello/icon-hello.component';
import { IconComponent } from './icon/icon.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
    imports: [
        CommonModule,
        ComponentsRoutes,
        NgZorroAntdModule
    ],
    declarations: [
        ButtonComponent,
        ButtonHelloComponent,
        IconHelloComponent,
        IconComponent,
        TypographyComponent,
        ComponentsComponent
    ],
    providers: [
        { provide: NZ_I18N, useValue: zh_CN }
     ],
})
export class ComponentsModule {}
