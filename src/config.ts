import { ServiceConfigType } from '@footballerista-llc/fbl-type-schema';

const {
  // local auth
  BASIC_AUTH_USERNAME,
  BASIC_AUTH_PASSWORD,
  // global auth
  GLOBAL_AUTH_USERNAME,
  GLOBAL_AUTH_PASSWORD,

  // feed service
  FEED_SERVICE_BASEURL,
  FEED_SERVICE_USERNAME,
  FEED_SERVICE_PASSWORD,
} = process.env;

export const basicAuthConfig: ServiceConfigType = {
  username: BASIC_AUTH_USERNAME ?? GLOBAL_AUTH_USERNAME,
  password: BASIC_AUTH_PASSWORD ?? GLOBAL_AUTH_PASSWORD,
};

export const userServiceConfig: ServiceConfigType = {
  url: FEED_SERVICE_BASEURL ?? 'fbl-user-service',
  username: FEED_SERVICE_USERNAME ?? GLOBAL_AUTH_USERNAME,
  password: FEED_SERVICE_PASSWORD ?? GLOBAL_AUTH_PASSWORD,
};
