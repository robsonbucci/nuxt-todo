/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { NuxtCookies } from 'cookie-universal-nuxt';

let $axios: NuxtAxiosInstance;
let $cookies: NuxtCookies;

export const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
  $axios = axiosInstance;
};

export const initializeCookies = (cookiesInstance: NuxtCookies) => {
  $cookies = cookiesInstance;
};
