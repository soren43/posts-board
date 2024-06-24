// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.

const config = {
  POSTS_URL: 'https://jsonplaceholder.typicode.com/posts',
};

export const environment = {
  name: 'local',
  production: false,
  config: config,
};
