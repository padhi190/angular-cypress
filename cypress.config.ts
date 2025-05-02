import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://4200-checkproofj-angularcypr-v2aa3owt0dn.ws-eu118.gitpod.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
