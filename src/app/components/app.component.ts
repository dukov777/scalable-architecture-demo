import {Component, provide} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {AboutComponent} from '../../about/components/about.component';

import {AsyncService} from '../../shared/services/async-services/async-service.service';
import {BpRestfulService} from '../../shared/services/async-services/bp-restful-async-service.service';

import {BpRestfulCommandBuilder} from '../../shared/services/commands/builders/bp-restful-command-builder.service';

import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';


import {provideStore} from '@ngrx/store';
import {API_URL} from '../../shared/config/config';
import {parentReducer} from '../../shared/services/reducers/parent.reducer';
import {ParentModel} from '../../shared/services/models/parent.model';

// import {CommandBuilder} from './shared/services/commands/builders/command-builder.service';

import {RestfulGateway} from '../../shared/services/gateways/restful-gateway.service';

import {HTTP_PROVIDERS} from 'angular2/http';


const providers = [
  provide(AsyncService, { useClass: BpRestfulService, multi: true }),
  BpRestfulCommandBuilder,
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provideStore({ parent: parentReducer }),
  ParentModel,
  RestfulGateway,
  provide(API_URL, { useValue: 42 }),
  provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' })
];

@Component({
  selector: 'sd-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  providers
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent }
])
export class AppComponent {}
