import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import Rest from '@/components/Rest'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'
import ReFirstPart from '@/components/HomeComponents/Re/ReFirstPart'
import ReSecondPart from '@/components/HomeComponents/Re/ReSecondPart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'FirstPart',
          component: FirstPart
        },
        {
          path: 'SecondPart',
          name: 'SecondPart',
          component: SecondPart,
          children: [
            {
              path: '/',
              name: 'ReFirstPart',
              component: ReFirstPart
            },
            {
              path: '/ReSecondPart',
              name: 'ReSecondPart',
              component: ReSecondPart
            }
          ]
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    },
    {
      path: '/Rest',
      name: 'Rest',
      component: Rest
    }
  ]
})
