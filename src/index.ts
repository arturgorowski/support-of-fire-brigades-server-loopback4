import { SupportOfFireBrigadesApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { SupportOfFireBrigadesApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new SupportOfFireBrigadesApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}
