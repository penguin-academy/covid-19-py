import React from 'react'
import StoryRouter from 'storybook-react-router'
import { withKnobs, select, number } from '@storybook/addon-knobs'

import HomeTag from '../layouts/Home'
import NavigationBarTag from '../components/NavigationBar'
import FooterTag from '../components/Footer'
import SuccessTag from '../layouts/Success'
import LegalTag from '../layouts/Legal'
import QuizzTag from '../layouts/Quizz'
import AboutTag from '../layouts/About'
import StatsTag from '../layouts/Stats'

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
    generalHealth: 'good',
    gender: {
      answer: select('Gender', ['male', 'female'], 'male'),
      show: true
    },
    pregnant: { answer: select('Pregnant', ['yes', 'no'], 'no'), show: true },
    age: { answer: number('age'), show: true },
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
    professionalExposureWhileIll: {
      show: true,
      answer: select('Prof Exposure While Ill', ['yes', 'no'], 'no')
    },
    familyExposure: {
      answer: select('Fam Exposure', ['yes', 'no'], 'no'),
      show: true
    },
    familyExposureWhileIll: {
      show: false,
      answer: select('Fam Exposure While Ill', ['yes', 'no'], 'no')
    },
    confirmedExposure: {
      show: true,
      answer: select('Confirmed Exposure', ['yes', 'no'], 'no')
    },
    confirmedExposureWhileIll: {
      show: false,
      answer: select('Confirmed Exposure While Ill', ['yes', 'no'], 'no')
    }
  }
  return <SuccessTag form={defaultValue} />
}

export const SuccessPage = () => {
  const defaultValue = {
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

  return (
    <>
      <NavigationBarTag />
      <SuccessTag form={defaultValue} />
      <FooterTag />
    </>
  )
}

export const Legal = () => <LegalTag />
export const Stats = () => <StatsTag />
export const About = () => <AboutTag />
export const Quizz = () => <QuizzTag />
