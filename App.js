import { Box, Container,Button } from '@chakra-ui/react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,Text,Spacer
} from '@chakra-ui/react'
import React,{useState,setState} from 'react'

const App = () =>{
  const [currentValue, setCurrentValue] = useState(0)
  const [voltageValue, setVoltageValue] = useState(0)
  const [powerValue,setPowerValue] =useState(0)
  const [bg,setBg]=useState()
  const handleClick=()=>{
    setPowerValue(currentValue*voltageValue)
    // console.log(powerValue)
  }

  const DangerLevel=()=>{
    if (powerValue<1000)
    {
      setBg('green')
      // console.log(bg)
    }
    else if(powerValue>1000 && powerValue<10000)
    {
      setBg('yellow')
      // console.log(bg)
    }
    else if(powerValue>10000)
    {
      setBg('red')
      // console.log(bg)
      
    }
  }
  return (
    <Container>
      <Box p='30px' mt='10' ml='10' alignItems='center' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box pt={6} pb={2}>
      <Text as='mark'>Current</Text>
       <br/>
      <Slider  mt={50} aria-label='slider-ex-6' onChange={(val) => setCurrentValue(val)}>
          <SliderMark
          value={currentValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
          >
          {currentValue}
          </SliderMark>
          <SliderTrack>
          <SliderFilledTrack bg='tomato' />
          </SliderTrack>
          <SliderThumb />
      </Slider>
      </Box>
      <Spacer />
      <Box pt={6} pb={2}>
       <Text as='mark'>Voltage</Text>
       <br/>
      <Slider mt={50}aria-label='slider-ex-6' min={0} max={500} onChange={(val) => setVoltageValue(val)}>
          <SliderMark
          value={voltageValue}
          textAlign='center'
          bg='tomato'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
          >
          {voltageValue}
          </SliderMark>
          <SliderTrack>
          <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
      </Slider>
      </Box>
      <Button alignItems='center' onClick={handleClick}>Calculate</Button>
      
      </Box>
      
      <Box p='20px' mt='10' ml='10' alignItems='center' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Text>
          Current={currentValue} I
        </Text>
        <Text>
        Voltage ={voltageValue} volts
        </Text>
        <strong>
          Power= {powerValue} W
        </strong>
      </Box>
      <Box mt='7' ml='10' h='20px' bg={bg} minw='50px' alignItems='center' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <DangerLevel />
      </Box>
      </Container>
  )
}

export default App