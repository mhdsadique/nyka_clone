
import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormLabel, grid, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, Radio, RadioGroup, Select, Stack, Text, Textarea,  } from '@chakra-ui/react'
import Image from 'next/image'

import {  useDisclosure } from '@chakra-ui/react'
import {  Drawer, DrawerBody, DrawerFooter,
    DrawerHeader,DrawerOverlay, DrawerContent,
    DrawerCloseButton, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

function Address() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  const [addaress,setAdaddress]=useState([])
  const [address,setAddress]=useState('')
  const [phone,setphone]=useState('')
  const [email,setemail]=useState('')
  const [pincode,setpincodes]=useState('')
  const [house,sethouse]=useState('')
  const [area,setarea]=useState('')
  
  var addata=[]
const router=useRouter()
const handleClick=(id)=>{
  router.push(`/payment`)
}
  const submitdata=()=>{
    const newItem={
      name:address,
      phone:phone,
      email:email,
      pincode:pincode,
      house:house,
      area:area,
      id:Date.now()
  }
  addata.push(newItem)
  setAdaddress([...addaress,newItem])
  localStorage.setItem("address",JSON.stringify(newItem))
}

console.log(addaress)
  return (
    <>

    <Box w={'80%'} margin='auto'>
  <Flex justifyContent={'space-between'}>

    <Box >
        <Heading>Choose Address</Heading>
        <Text>Detailed address will help our delivery partner reach your doorstep quickly</Text>
    </Box>
    <Box>
        <Image width={400}height={400} src={'https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg'}alt='addrses'/>
    </Box>
  </Flex>
  <Flex gap='20px'>
  <Box onClick={onOpen} cursor={'pointer'} textAlign={'center'} w={'400px'}h='180px' color={'#e80071'}display='grid' border='1px'alignItems={'center'}justifyContent={'center'}>
    <AddIcon margin='auto'/>
    <Heading size={'md'}>Add New Address</Heading>
  </Box>
  <Box  >
{
  addaress.map((ad)=><Box key={ad.id} w={'350px'}h='auto' border='1px' padding={'20px'}>
    <Heading size={'md'}>{ad.name}</Heading>
    <Text size={'md'}>{ad.area}</Text>
    <Text size={'md'}>{ad.house}</Text>
    <Text size={'md'}>{ad.phone}</Text>
    <Button onClick={()=>handleClick()}bgColor='#e80071' >Deliver here</Button>
  </Box>)
}
  </Box>
</Flex>
  </Box>
  {/* =================== */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
          New Address
          </DrawerHeader>
           <Heading size={'sm'}>Contact</Heading>
          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                {/* <FormLabel htmlFor='username'>Name</FormLabel> */}
                <Input
                   onChange={(e)=>setAddress(e.target.value)}
                   value={address}
                  type='text'
                  ref={firstField}
                  id='username'
                  placeholder='Name'
                />
                  <Input
                      onChange={(e)=>setphone(e.target.value)}
                   value={phone}
                  type='number'
                  ref={firstField}
                  id='username'
                  placeholder='Phone'
                />
                  <Input
                      onChange={(e)=>setemail(e.target.value)}
                   value={email}
                  type='email'
                  ref={firstField}
                  id='username'
                  placeholder='Email ID(Optional)'
                />
              </Box>
            

              <Heading size={'sm'}>Address</Heading>

              <Box>
                {/* <FormLabel htmlFor='url'>Pincode</FormLabel> */}
                <InputGroup>
                <Input
                    onChange={(e)=>setpincodes(e.target.value)}
                   value={pincode}
                  type='number'
                  ref={firstField}
                  id='username'
                  placeholder='Pincode'
                />
                </InputGroup>
              </Box>


              <Box>
              <Input
                 onChange={(e)=>sethouse(e.target.value)}
                 value={house}
                  type='text'
                  ref={firstField}
                  id='username'
                  placeholder='House/Flate/Office No'
                />
                <FormLabel htmlFor='desc'></FormLabel>
                <Textarea  value={area}   onChange={(e)=>setarea(e.target.value)} id='desc' placeholder='Road Name/Area/Colony' />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={submitdata} bgColor='#e80071'>Ship to this address</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
  export default Address