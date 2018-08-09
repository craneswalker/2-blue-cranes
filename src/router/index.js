import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    }
  ]
})
