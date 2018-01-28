import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/en/Home'
import Courses from '@/components/pages/en/Courses'
import CurrentCourses from '@/components/pages/en/CurrentCourses'
import Prices from '@/components/pages/en/Prices'
import ExtraCurricular from '@/components/pages/en/ExtraCurricular'
import TeachingPractice from '@/components/pages/en/TeachingPractice'
import Accommodation from '@/components/pages/en/Accommodation'
import Travel from '@/components/pages/en/Travel'
import WhatToDo from '@/components/pages/en/WhatToDo'
import InteractiveCourses from '@/components/pages/en/InteractiveCourses'
import Excursions from '@/components/pages/en/Excursions'
import Gallery from '@/components/pages/en/Gallery'
import StudentsSay from '@/components/pages/en/StudentsSay'
import Promos from '@/components/pages/en/Promos'

// Russian

import RuHome from '@/components/pages/ru/Home'
import RuCourses from '@/components/pages/ru/Courses'
import RuPrices from '@/components/pages/ru/Prices'
import RuExtraCurricular from '@/components/pages/ru/ExtraCurricular'
import RuWhatToDo from '@/components/pages/ru/WhatToDo'
import RuInteractiveCourses from '@/components/pages/ru/InteractiveCourses'
import RuGallery from '@/components/pages/ru/Gallery'
import RuStudentsSay from '@/components/pages/ru/StudentsSay'
import RuPromos from '@/components/pages/ru/Promos'
import RuHost from '@/components/pages/ru/Host'

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
      path: '/en/interactive-courses',
      name: 'Interactive-courses',
      component: InteractiveCourses
    },
    {
      path: '/en/excursions',
      name: 'Excursions',
      component: Excursions
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
      path: '/en/promos',
      name: 'Promos',
      component: Promos
    },
    // RU
    {
      path: '/ru/',
      name: 'RU-Home',
      component: RuHome
    },
    {
      path: '/ru/courses',
      name: 'RU-Courses',
      component: RuCourses
    },
    {
      path: '/ru/prices',
      name: 'RU-Prices',
      component: RuPrices
    },
    {
      path: '/ru/extra-curricular',
      name: 'RU-Extra-curricular',
      component: RuExtraCurricular
    },
    {
      path: '/ru/what-to-do',
      name: 'RU-What-to-do',
      component: RuWhatToDo
    },
    {
      path: '/ru/interactive-courses',
      name: 'RU-Interactive-courses',
      component: RuInteractiveCourses
    },
    {
      path: '/ru/gallery',
      name: 'RU-Gallery',
      component: RuGallery
    },
    {
      path: '/ru/students-say',
      name: 'RU-Students-say',
      component: RuStudentsSay
    },
    {
      path: '/ru/promos',
      name: 'RU-Promos',
      component: RuPromos
    },
    {
      path: '/ru/host',
      name: 'RU-Host',
      component: RuHost
    },
    {
      path: '/en/:any',
      redirect: '/'
    },
    {
      path: '/ru/:any',
      redirect: '/ru/'
    },
    {
      path: '/:any',
      redirect: '/'
    }
  ]
})
