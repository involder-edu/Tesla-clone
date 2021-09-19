import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'

function Section({title,description,backgroundImg,leftBtnText,rigthBtnText}) {
  return (
  <Wrap bgImage={backgroundImg}>
    <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
    </Fade>
 
    <Buttons>
    <Fade bottom>
      <ButtonsGroup>
        <LeftButton>
          {leftBtnText}
        </LeftButton>
        { rigthBtnText  && 
          <RightButton>
            {rigthBtnText}
          </RightButton>
        }
    
      </ButtonsGroup>
    </Fade>
      <DownArrow src="/images/down-arrow.svg" />
    </Buttons>
  
  </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: orange;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('/images/model-s.jpg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/images/${props.bgImage}")`}
  `

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonsGroup = styled.div`
  display:flex;
  padding-bottom: 5vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`

const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  margin: 10px;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`

