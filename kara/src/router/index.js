import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StatisticPage from '../views/StatisticPage'
import FilterPage from '../views/FilterPage'
import UploadAsset from "../views/UploadAsset"
import ReportAsset from "../views/ReportAsset"
import ReportedList from "../views/ReportedList"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/FilterPage',
    name: 'FilterPage',
    component: FilterPage
  },
      {
    path: '/StatisticPage',
    name: 'StatisticPage',
    component: StatisticPage
  },
            {
    path: '/UploadAsset',
    name: 'UploadAsset',
    component: UploadAsset
  },
                        {
    path: '/ReportAsset',
    name: 'ReportAsset',
    component: ReportAsset
  },
                                            {
    path: '/ReportedList',
    name: 'ReportedList',
    component: ReportedList
  },




]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
