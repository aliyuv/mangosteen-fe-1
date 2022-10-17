import { RouteRecordRaw } from 'vue-router'
import { First } from '../components/First'
import { Fourth } from '../components/Fourth'
import { Second } from '../components/Second'
import { Third } from '../components/Third'
import { Welcome } from '../views/Welcome'
export const routes: RouteRecordRaw[] = [
  { path: '/', component: Welcome },
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
