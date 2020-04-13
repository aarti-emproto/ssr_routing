import Home from './home'
import Login from './Grid'
import { fetchEmployes } from './api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
    fetchInitialData: (path = '') => fetchEmployes(
      path.split('/').pop()
    )
  },
  {
    path: '/login',
    component: Login,
   
  }
]

export default routes