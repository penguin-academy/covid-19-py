import React from 'react'
import StoryRouter from 'storybook-react-router'
import HomeTag from '../layouts/Home'
import NavigationBarTag from '../layouts/NavigationBar'
import FooterTag from '../layouts/Footer'

export default {
  title: 'Pages',
  decorators: [StoryRouter()]
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
