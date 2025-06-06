import { provideServerRendering, withRoutes } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { CART_STORAGE } from './services/cart/cart.models';
import { MemoryCartStorage } from './services/cart/memory-cart-storage.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    { provide: CART_STORAGE, useClass: MemoryCartStorage }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
