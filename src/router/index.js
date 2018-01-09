import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Courses from '@/components/pages/Courses'
import CurrentCourses from '@/components/pages/CurrentCourses'
import Prices from '@/components/pages/Prices'
import ExtraCurricular from '@/components/pages/ExtraCurricular'
import TeachingPractice from '@/components/pages/TeachingPractice'
import Accommodation from '@/components/pages/Accommodation'
import Travel from '@/components/pages/Travel'
import WhatToDo from '@/components/pages/WhatToDo'
import Excursions from '@/components/pages/Excursions'
import Activities from '@/components/pages/Activities'
import Gallery from '@/components/pages/Gallery'
import StudentsSay from '@/components/pages/StudentsSay'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/en/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/en/current-courses',
      name: 'Current-courses',
      component: CurrentCourses
    },
    {
      path: '/en/prices',
      name: 'Prices',
      component: Prices
    },
    {
      path: '/en/extra-curricular',
      name: 'Extra-curricular',
      component: ExtraCurricular
    },
    {
      path: '/en/teaching-practice',
      name: 'Teaching-practice',
      component: TeachingPractice
    },
    {
      path: '/en/accommodation',
      name: 'Accommodation',
      component: Accommodation
    },
    {
      path: '/en/travel',
      name: 'Travel',
      component: Travel
    },
    {
      path: '/en/what-to-do',
      name: 'What-to-do',
      component: WhatToDo
    },
    {
      path: '/en/excursions',
      name: 'Excursions',
      component: Excursions
    },
    {
      path: '/en/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/en/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/en/students-say',
      name: 'Students-say',
      component: StudentsSay
    },
    {
      path: '/en/:any',
      redirect: '/'
    },
    {
      path: '/ru/:any',
      redirect: '/'
    },
    {
      path: '/:any',
      redirect: '/'
    }
  ]
})
