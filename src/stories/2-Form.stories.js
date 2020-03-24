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
  age: { show: true, answer: 0 },
  breath: { show: true, answer: 'no' },
  fever: { show: true, answer: 'no' },
  alarmSigns: { show: false, answer: '' },
  riskGroup: { show: true, answer: 'no' },
  healthProfessional: { show: true, answer: 'yes' },
  professionalExposure: { show: true, answer: 'yes' },
  professionalExposureWhileIll: { show: true, answer: 'yes' },
  familyExposure: { show: true, answer: 'no' },
  familyExposureWhileIll: { show: false, answer: '' },
  confirmedExposure: { show: true, answer: 'no' },
  confirmedExposureWhileIll: { show: false, answer: '' }
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
