import React from "react"
import styled from "styled-components"
import { useTranslation } from 'react-i18next'

const Anchor = styled.a`
& {
  position: absolute;
  left: -999px;
  top: -999px;
  background-color: white;
  border: 1px solid;
  padding: 0.5rem;
}

&:focus {
  left: 2rem;
  top: 0.5rem;
}
`

const SkipNavigation = () => {
  const { t } = useTranslation('navbar')

  const clickHandler = (e) => {
    e.preventDefault()
    const main = document.querySelector("main")
    console.log('will focus: ', main)
    main.focus()
  }

  return (
    <Anchor onClick={clickHandler} href="#">{t("skipNavigation")}</Anchor>
  )
}

export default SkipNavigation