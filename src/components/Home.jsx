import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImg ="model-s.jpg"
        leftBtnText="Custom order"
        rigthBtnText="Existing inventory"
      />
      <Section 
        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImg ="model-y.jpg"
        leftBtnText="Custom order"
        rigthBtnText="Existing inventory"
      />
      <Section 
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg ="model-3.jpg"
        leftBtnText="Custom order"
        rigthBtnText="Existing inventory"
      />
      <Section 
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImg ="model-x.jpg"
        leftBtnText="Custom order"
        rigthBtnText="Existing inventory"
      />
      <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back quarantee"
        backgroundImg ="solar-panel.jpg"
        leftBtnText="Order now"
        rigthBtnText="Learn more"
      />      
      <Section 
        title="Accessories"
        description=""
        backgroundImg ="accessories.jpg"
        leftBtnText="Show now"
      />
      {/* <Section />
      <Section />
      <Section />
      <Section /> */}
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;

`