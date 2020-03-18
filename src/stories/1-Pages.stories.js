import React from 'react'
import StoryRouter from 'storybook-react-router'
import { withKnobs, select } from '@storybook/addon-knobs'

import HomeTag from '../layouts/Home'
import NavigationBarTag from '../components/NavigationBar'
import FooterTag from '../components/Footer'
import SuccessTag from '../layouts/Success'
import LegalTag from '../layouts/Legal'
import AboutTag from '../layouts/About'

export default {
  title: 'Pages',
  decorators: [StoryRouter(), withKnobs()]
}

export const Nav = () => <NavigationBarTag />
export const Home = () => <HomeTag />
export const Footer = () => <FooterTag />
export const Home_Page = () => (
  <>
    <NavigationBarTag />
    <HomeTag />
    <FooterTag />
  </>
)
export const Success = () => {
  const defaultValue = {
    generalHealth: { show: true, answer: 'good' },
    gender: {
      answer: select('Gender', ['male', 'female'], 'male'),
      show: true
    },
    pregnant: { answer: select('Pregnant', ['yes', 'no'], 'no'), show: true },
    age: { answer: 1, show: true },
    breath: { answer: select('Breath', ['yes', 'no'], 'no'), show: true },
    fever: { answer: select('Fever', ['yes', 'no'], 'no'), show: true },
    alarmSigns: {
      answer: select('Alarm Signs', ['yes', 'no'], 'no'),
      show: true
    },
    riskGroup: {
      answer: select('RiskGroup', ['yes', 'no'], 'no'),
      show: true
    },
    healthProfessional: {
      answer: select('Health Professional', ['yes', 'no'], 'no'),
      show: true
    },
    professionalExposure: {
      answer: select('Prof Exposure', ['yes', 'no'], 'no'),
      show: true
    },
    familyExposure: {
      answer: select('Fam Exposure', ['yes', 'no'], 'no'),
      show: true
    }
  }
  return <SuccessTag form={defaultValue} />
}

export const SuccessPage = () => {
  const defaultValue = {
    generalHealth: { show: true, answer: 'good' },
    gender: { answer: 'female', show: true },
    pregnant: { answer: 'yes', show: true },
    age: { answer: 1, show: true },
    breath: { answer: 'yes', show: true },
    fever: { answer: 'yes', show: true },
    alarmSigns: { answer: 'no', show: true },
    riskGroup: { answer: 'yes', show: true },
    healthProfessional: { answer: 'yes', show: true },
    professionalExposure: { answer: 'yes', show: true },
    familyExposure: { answer: 'yes', show: true }
  }

  return (
    <>
      <NavigationBarTag />
      <SuccessTag form={defaultValue} />
      <FooterTag />
    </>
  )
}

export const Legal = () => <LegalTag />
export const About = () => <AboutTag />
