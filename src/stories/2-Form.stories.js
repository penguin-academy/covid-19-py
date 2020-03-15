import React from 'react'
import StoryRouter from 'storybook-react-router'
import FormTag from '../layouts/Form'
import NavigationBarTag from '../components/NavigationBar'
import { FooterSmall } from '../components/Footer'

export default {
  title: 'Forms',
  decorators: [StoryRouter()]
}

export const Form = () => <FormTag />
export const Form_Page = () => (
  <>
    <NavigationBarTag />
    <FormTag />
    <FooterSmall />
  </>
)
