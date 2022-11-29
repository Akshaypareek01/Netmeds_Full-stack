import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { EmailIcon, ViewIcon } from '@chakra-ui/icons'
const LoginPage = () => {
  const [userdetails, setuserdetails] = useState({ email: '', password: '' })
  const handlechange = (e) => {
    const { name, value } = e.target
    setuserdetails({ ...userdetails, [name]: value })
  }
  const [loading, setloading] = useState(false)
  const notify = () =>
    toast('Login Succesfull', {
      autoClose: 1000,
    })
  const navigate = useNavigate()
  const handlesubmit = async () => {
    setloading(true)
    let res = await fetch(`https://netmeds.onrender.com/login`, {
      method: 'POST',
      body: JSON.stringify(userdetails),
      headers: {
        'Content-type': 'application/json',
      },
    })
    let data = await res.json()
    let decode = await fetch(`https://netmeds.onrender.com/decode`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    })
    let decodejson = await decode.json()
    localStorage.setItem('userDetails', JSON.stringify(decodejson.user))
    localStorage.setItem('cartid', JSON.stringify(decodejson.user._id))
    localStorage.setItem('isLoggedIn', true);
    console.log(decodejson)
    setloading(false)
    if (data != undefined) {
      notify()
      navigate('/')
    }
  }

  const { email, password } = userdetails

  return (
    <Flex
      bg={'rgb(247 246 246)'}
      height="100vh"
      flexDirection={'column'}
      alignItems="center"
    >
      <ToastContainer />
      <Container
        bg={'white'}
        centerContent
        borderRadius={'16px'}
        width="70%"
        maxW="4xl"
        margin={'60px'}
        mb="20px"
        height="28rem"
      >
        <Flex>
          <Box height="25rem">
            <Image
              width="140%"
              maxW={'988px'}
              position="relative"
              left="-4rem"
              borderRadius="16px"
              src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
            />
          </Box>

          <FormControl mt="3rem" ml="4rem">
            <Text
              ml="15px"
              fontSize={'13px'}
              color="#24aeb1"
              paddingBlock={'3px'}
            >
              EMAIL
            </Text>

            <Flex>
              <EmailIcon mt="4px" alignItems={'center'} mr="10px" />
              <Input
                paddingBlock={'3px'}
                height="24px"
                placeholder="Enter your email"
                fontSize={'16px'}
                value={email}
                variant={'flushed'}
                type="email"
                name="email"
                onChange={handlechange}
              />
            </Flex>
            <br />

            <Text
              ml="15px"
              fontSize={'13px'}
              color="#24aeb1"
              paddingBlock={'3px'}
            >
              PASSWORD
            </Text>
            <Flex>
              <ViewIcon mt="4px" alignItems={'center'} mr="10px"></ViewIcon>
              <Input
                paddingBlock={'3px'}
                height="24px"
                placeholder="Enter your Password"
                fontSize={'16px'}
                value={password}
                variant={'flushed'}
                name="password"
                type="password"
                onChange={handlechange}
              />
            </Flex>
            <Button
              onClick={handlesubmit}
              mt="34px"
              bg={'rgb(50,174,177)'}
              color="white"
              fontSize="16px"
              paddingBlock={'10px'}
              height="41px"
              width={'100%'}
              _hover={{ background: 'rgb(50,174,177)' }}
              isLoading={loading}
            >
              LOGIN
            </Button>
            <br />
            <br />

            <Text textAlign={'center'}>
              If you don't have an account{' '}
              <Link style={{ color: 'rgb(240, 105, 154) ' }} to="/Signup">
                Create an account
              </Link>
            </Text>
            <br />
            <Container fontSize={'12px'} centerContent>
              <Text>
                By continuing you agree to our{' '}
                <Link color="rgb(240,105,154)"> Terms of service</Link>
              </Text>
              <Text>
                and{' '}
                <Link color="rgb(240,105,154)"> Privacy & Legal Policy</Link>.
              </Text>
            </Container>
          </FormControl>
        </Flex>
      </Container>
    </Flex>
  )
}

export default LoginPage
