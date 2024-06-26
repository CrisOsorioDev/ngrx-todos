import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch(
  (err) =>
    /* eslint-disable no-console */
    console.error(err),
  /* eslint-enable no-console */
);
