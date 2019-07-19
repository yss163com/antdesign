import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonHelloComponent } from './components/button/button-hello/button-hello.component';
import { IconHelloComponent } from './components/icon/icon-hello/icon-hello.component';
import { IconComponent } from './components/icon/icon.component';
import { TypographyComponent } from './components/typography/typography.component';
import { from } from 'rxjs';
import { ComponentsComponent } from './components/components.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { CustomizeThemeComponent } from './customize-theme/customize-theme.component';

registerLocaleData(zh);

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NavBarComponent,
      ButtonComponent,
      ButtonHelloComponent,
      IconHelloComponent,
      IconComponent,
      TypographyComponent,
      ComponentsComponent,
      GettingStartedComponent,
      CustomizeThemeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgZorroAntdModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule
   ],
   providers: [
      { provide: NZ_I18N, useValue: zh_CN }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
