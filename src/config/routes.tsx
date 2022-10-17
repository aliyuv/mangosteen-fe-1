import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/First'
import { Fourth } from '../components/Fourth'
import { Second } from '../components/Second'
import { Third } from '../components/Third'
import { Bar } from '../views/Bar'
import { Foo } from '../views/Foo'
import { Welcome } from '../views/Welcome'
export const routes: RouteRecordRaw[] = [
  { path: '/', component: Foo },
  { path: '/about', component: Bar },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '1', component: First },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Fourth }

    ]
  }
]
