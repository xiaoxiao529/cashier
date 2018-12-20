import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/Pos'

Vue.use(Router)

/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }
  ]
})*/

let router = new Router({
	routes:[
		{
			path:'/',
			name:'Pos',
			component:Pos
		}
	]
})

export default router;