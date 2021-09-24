import request from '@/utils/request.js'

export function getCart (params) {
  return request.get('/shop-cart', { params })
}