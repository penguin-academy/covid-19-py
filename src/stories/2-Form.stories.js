import React from 'react'
import StoryRouter from 'storybook-react-router'
import StartTag from '../layouts/Start'
import FormTag from '../layouts/Form'
import PersonTag from '../layouts/Person'
import NavigationBarTag from '../components/NavigationBar'
import { FooterSmall } from '../components/Footer'

export default {
  title: 'Forms',
  decorators: [StoryRouter()]
}

const filledState = {
  generalHealth: 'good',
  gender: { show: true, answer: 'male' },
  pregnant: { show: false, answer: '' },
  age: { show: true, answer: 1 },
  breath: { show: true, answer: 'yes' },
  fever: { show: true, answer: 'yes' },
  alarmSigns: { show: true, answer: 'yes' },
  riskGroup: { show: true, answer: 'yes' },
  healthProfessional: { show: true, answer: 'yes' },
  professionalExposure: { show: true, answer: 'no' },
  familyExposure: { show: true, answer: 'no' }
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

export const Person = () => <PersonTag setFormState={console.log} />
export const PersonFilled = () => {
  const localFilledState = {
    serious: { show: true, answer: 'report' },
    location: {
      show: true,
      answer: {
        value: 'ChIJ9dtpbgeoXZQRyTYZv0Z666w',
        label: 'Assunção, Paraguay'
      }
    },
    phone: { show: true, answer: '4567898765434567' }
  }
  return (
    <PersonTag
      form={filledState}
      filledState={localFilledState}
      setFormState={console.log}
    />
  )
}

export const PersonPage = () => (
  <>
    <NavigationBarTag />
    <PersonTag setFormState={console.log} />
    <FooterSmall />
  </>
)
