import service from '../utils/request'

const qs=require('qs');
const base = 'http://5dd3847e6625890014a6e6ae.mockapi.io/api/vue3';

export const getThumbs = (params: any) => { return service.get(`${base}/thumb`, {params}).then(res => res)};

export const getProducts = (params: any) => { return service.get(`${base}/products`, {params}).then(res => res)};