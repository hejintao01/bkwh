import Vue from 'vue'
import Router from 'vue-router'
import App from '../../App.vue'
import store from '../../store'
import RoleSelection from '../../RoleSelection/RoleSelection.vue'
import DriverBind from '../../DriverBind/DriverBind.vue'
import CarrierBind from '../../CarrierBind/CarrierBind.vue'
import CarrierOrder from '../../CarrierOrder/CarrierOrder.vue'
import Orderdetail from '../../CarrierOrder/orderdetail.vue'
import Carrs from '../../SuccessBind/carsuccess.vue'


Vue.use(Router)

const router = new Router({
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
    path: '/CarrierBind',
    component: CarrierBind,
  },
  {
    path: '/SuccessBind',
    component: Carrs,
  }
],
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
