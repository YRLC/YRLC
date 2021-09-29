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
import RuInformation from '@/components/pages/ru/Information'
import RUGoverning from '@/components/pages/ru/Governing'
import RUDocuments from '@/components/pages/ru/Documents'
import RUEducation from '@/components/pages/ru/Education'
import RUStandards from '@/components/pages/ru/Standards'
import RUTeachers from '@/components/pages/ru/Teachers'
import RUEquipment from '@/components/pages/ru/Equipment'
import RUScholarships from '@/components/pages/ru/Scholarships'
import RUPaidEducation from '@/components/pages/ru/PaidEducation'
import RUFinancial from '@/components/pages/ru/Financial'
import RUVacantSeats from '@/components/pages/ru/VacantSeats'
import RUInternationalPartnership from '@/components/pages/ru/InternationalPartnership'
import RUAccessibleEnvironment from '@/components/pages/ru/AccessibleEnvironment'

Vue.use(Router)

const russian = false

export default new Router({
  routes: [
    {
      path: russian ? '/en/' : '/',
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
      path: russian ? '/' : '/ru/',
      name: 'RU-Home',
      component: RuHome
    },
    {
      path: `${russian ? '/' : '/ru/'}information`,
      name: 'RU-Information',
      component: RuInformation
    },
    {
      path: `${russian ? '/' : '/ru/'}governing`,
      name: 'RU-Governing',
      component: RUGoverning
    },
    {
      path: `${russian ? '/' : '/ru/'}documents`,
      name: 'RU-Documents',
      component: RUDocuments
    },
    {
      path: `${russian ? '/' : '/ru/'}education`,
      name: 'RU-Education',
      component: RUEducation
    },
    {
      path: `${russian ? '/' : '/ru/'}standards`,
      name: 'RU-Standards',
      component: RUStandards
    },
    {
      path: `${russian ? '/' : '/ru/'}teachers`,
      name: 'RU-Teachers',
      component: RUTeachers
    },
    {
      path: `${russian ? '/' : '/ru/'}equipment`,
      name: 'RU-Equipment',
      component: RUEquipment
    },
    {
      path: `${russian ? '/' : '/ru/'}scholarships`,
      name: 'RU-Scholarships',
      component: RUScholarships
    },
    {
      path: `${russian ? '/' : '/ru/'}paideducation`,
      name: 'RU-Paid-Education',
      component: RUPaidEducation
    },
    {
      path: `${russian ? '/' : '/ru/'}financial`,
      name: 'RU-Financial',
      component: RUFinancial
    },
    {
      path: `${russian ? '/' : '/ru/'}vacantseats`,
      name: 'RU-Vacant-Seats',
      component: RUVacantSeats
    },
    {
      path: `${russian ? '/' : '/ru/'}international_partnership`,
      name: 'RU-International-Partnership',
      component: RUInternationalPartnership
    },
    {
      path: `${russian ? '/' : '/ru/'}accessible_environment`,
      name: 'RU-Accessible-Environment',
      component: RUAccessibleEnvironment
    },
    {
      path: '/en/:any',
      redirect: russian ? '/en/' : '/'
    },
    {
      path: '/ru/:any',
      redirect: russian ? '/' : '/ru/'
    },
    {
      path: '/:any',
      redirect: '/'
    }
  ]
})
