import Vue from 'vue'
import Router from 'vue-router'

const RoleSelection = () => import('@/RoleSelection/RoleSelection.vue')
const DriverBind = () => import('@/DriverBind/DriverBind.vue')
const CarrierOrder = () => import('@/CarrierOrder/CarrierOrder.vue')
const Orderdetail = () => import('@/CarrierOrder/orderdetail.vue')
const Carrs = () => import('@/SuccessBind/carsuccess.vue')



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '',
    redirect: '/RoleSelection'
  },
  {
    path: '/RoleSelection',
    component: RoleSelection,
  },
  {
    path: '/DriverBind',
    component: DriverBind,
  },
   {
    path: '/CarrierOrder',
    component: CarrierOrder,
  },
  {
    path: '/CarrierOrder/:id',
    component: Orderdetail,
  },
  {
  path: '/SuccessBind',
  component: Carrs,
  }
],
})
