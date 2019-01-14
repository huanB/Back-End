import Vue from 'vue'
import Router from 'vue-router'
import InDex from '../pages/index'
import Dash from '../components/dash/seDetails'
import Dispose from '../components/dispose/seDispose'
import Logistics from '../components/logistics/seLogistics'
import PlyClass from '../components/plyClass/sePlyClass'
import Limits from '../components/limits/seLimits'
import Administrator from '../components/administrator/seAdministrator'
import Personal from '../components/personal/sePersonal'
import IndSection from '../components/index/IndexSection'
import Login from '../pages/Login'
import Reg from '../pages/Reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/InDex',
      // name: 'Index',
      component: InDex,
      redirect:"/InDex/IndSection",
      children:[
        {
          path:"IndSection",
          name:"IndSection",
          component:IndSection
        },
        {
          path: 'Dash',
          name: 'Dash',
          component: Dash,
        },
        {
          path: 'Dispose',
          name: 'Dispose',
          component: Dispose,
        },
        {
          path: 'Logistics',
          name: 'Logistics',
          component: Logistics,
        },
        {
          path: 'PlyClass',
          name: 'PlyClass',
          component: PlyClass,
        },
        {
          path: 'Limits',
          name: 'Limits',
          component: Limits,
        },
        {
          path:"Administrator",
          name:"Administrator",
          component:Administrator
        },
        {
          path:"Personal",
          name:"Personal",
          component:Personal
        }
      ]
    },
    {
      path:"/Reg",
      name:"/Reg",
      component:Reg
    },
    {
      path:"/",
      // name:"/Login",
      component:Login
    },

  ]
})
