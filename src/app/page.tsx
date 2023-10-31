"use client"

import Image from 'next/image'
import FirstPage from './home/FirstPage'
import SecondRow from './home/WhatIsDroid'
import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default function Home() {
  return (
    <>
      <FirstPage />
      <SecondRow />
    </>
  )
}
