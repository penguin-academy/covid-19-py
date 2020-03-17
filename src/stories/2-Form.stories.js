import React from 'react'
import StoryRouter from 'storybook-react-router'
import FormTag from '../layouts/Form'
import NavigationBarTag from '../components/NavigationBar'
import { FooterSmall } from '../components/Footer'

export default {
  title: 'Forms',
  decorators: [StoryRouter()]
}

const filledState = {
  generalHealth: { show: true, answer: 'good' },
  gender: { answer: 'female', show: true },
  pregnant: { answer: 'yes', show: true },
  age: { answer: 1, show: true },
  breath: { answer: 'yes', show: true },
  fever: { answer: 'yes', show: true },
  alarmSigns: { answer: 'yes', show: true },
  riskGroup: { answer: 'yes', show: true },
  healthProfessional: { answer: 'yes', show: true },
  professionalExposure: { answer: 'yes', show: true },
  familyExposure: { answer: 'yes', show: true }
}

export const Form = () => <FormTag />
export const Form_Page = () => (
  <>
    <NavigationBarTag />
    <FormTag />
    <FooterSmall />
  </>
)

export const Form_Page_Filled = () => (
  <>
    <NavigationBarTag />
    <FormTag filledState={filledState} onFinish={console.log} />
    <FooterSmall />
  </>
)
