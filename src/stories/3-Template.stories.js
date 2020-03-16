import React from 'react'
// import StoryRouter from 'storybook-react-router'
import CTAsTag from '../template/CTAs'
import ContactsTag from '../template/Contacts'
import ContentsTag from '../template/Contents'
import FeaturesTag from '../template/Features'
import FootersTag from '../template/Footers'
import FormsTag from '../template/Forms'
import HeadersTag from '../template/Headers'
import PricingsTag from '../template/Pricings'
import TeamsTag from '../template/Teams'
import TestimonialsTag from '../template/Testimonials'

export default {
  title: 'Template'
}

export const Ctas = () => <CTAsTag />
export const Contacts = () => <ContactsTag />
export const Contents = () => <ContentsTag />
export const Features = () => <FeaturesTag />
export const Footers = () => <FootersTag />
export const Forms = () => <FormsTag />
export const Headers = () => <HeadersTag />
export const Pricings = () => <PricingsTag />
export const Teams = () => <TeamsTag />
export const Testimonials = () => <TestimonialsTag />
