import { environment } from '../../environments/environment';
import { InjectionToken } from '@angular/core';

const apiUrl = environment.apiUrl;
export let APP_CONFIG = new InjectionToken('./app.config');
export interface IAppConfig {
  endpoints: any;
}
export const AppConfig: IAppConfig = {
  endpoints: {
    api: `${apiUrl}`,
    auth: {
      login: `${apiUrl}/api/auth/login`,
    },
    helpers: {
      encode: `${apiUrl}/api/helpers/encode`,
    },
    images: {
      upload: `${apiUrl}/api/images/upload`,
      get: `${apiUrl}/api/images/`,
      getAll: `${apiUrl}/api/images`,
      getNames: `${apiUrl}/api/images/names`,
      getGalleryImages: `${apiUrl}/api/images/gallery`,
    },
  },
};
