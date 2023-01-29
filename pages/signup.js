import React,{useState} from 'react'
import {Box,Input,Button,Heading,Text} from '@chakra-ui/react';
const Register=() =>
{
    const [sign,setSign]=useState([]);
    const [input,setInput]=useState({
        email: "",
        password: "",
        phone: 0,
        name: ""
    });
    const handleInputChange=(e) =>
    {

        const {name,value}=e.target;
        setInput({...input,[name]: value})
    }
    const sigin=(e) =>
    {
        e.preventDefault();
        setSign([...sign,input])
        localStorage.setItem("userData",JSON.stringify(sign))
    }
    return (
      <Box bgColor={'#f3f3f3'} p={10}>
    <Box w={'26%'} m='10rem auto' bgColor={'white'} p={10} justifyContent='center' alignItems={'center'} textAlign={'center'}>
    <Heading mb={5}>Register</Heading>
    <hr />
    <Box display={'flex'} m={'2rem 1rem'} fontSize={16} textAlign='center' width={'100%'} >
        <Text >Register to Earn</Text>&nbsp;<Text color={'#d5418e'}>2000  Reward Points!</Text>
    </Box>
    <form>
        <Input type='text' name='name' placeholder='Name' border={'none'} bgColor={'#f3f3f3'} borderBottom={'1px solid #d5418e'} onChange={handleInputChange} isRequired />
        &nbsp;
        <Input type='number' name='phone' placeholder='Number' border={'none'} bgColor={'#f3f3f3'} borderBottom={'1px solid #d5418e'} onChange={handleInputChange} isRequired
u />
        &nbsp;

        <Input type='email' name='email' placeholder='Email Address' border={'none'} bgColor={'#f3f3f3'} borderBottom={'1px solid #d5418e'} onChange={handleInputChange} isRequired
u />
        &nbsp;

        <Input type='password' name='password' placeholder='Password' border={'none'} bgColor={'#f3f3f3'} borderBottom={'1px solid #d5418e'} onChange={handleInputChange} isRequired
u />
        &nbsp;
        &nbsp;
        <br />
        <br />

        <Button onClick={sigin} bgColor="#d5418e" color={'white'} w='100%' m={'3rem 0'}>REGISTER</Button>
    </form>
            </Box>
            </Box>
  )
}

export default Register;