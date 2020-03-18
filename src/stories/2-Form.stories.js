import React from 'react'
import StoryRouter from 'storybook-react-router'
import StartTag from '../layouts/Start'
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

export const Start = () => <StartTag setFormState={console.log} />

export const StartPage = () => (
  <>
    <NavigationBarTag />
    <StartTag setFormState={console.log} />
    <FooterSmall />
  </>
)
export const Form = () => <FormTag setFormState={console.log} />
export const FormPage = () => (
  <>
    <NavigationBarTag />
    <FormTag setFormState={console.log} />
    <FooterSmall />
  </>
)

export const FormPageFilled = () => (
  <>
    <NavigationBarTag />
    <FormTag filledState={filledState} setFormState={console.log} />
    <FooterSmall />
  </>
)
