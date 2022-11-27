import React from 'react'
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
import { EmailIcon, ViewIcon, InfoIcon } from '@chakra-ui/icons'
const Signup = () => {
  const [userdetails, setuserdetails] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handlechange = (e) => {
    const { name, value } = e.target
    setuserdetails({ ...userdetails, [name]: value })
    console.log(userdetails)
  }
  const handlesubmit = () => {
    fetch(`https://netmeds.onrender.com/signup`, {
      method: 'POST',
      body: JSON.stringify(userdetails),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        res.json()
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  const { name, email, password } = userdetails
  return (
    <Flex
      bg={'rgb(247 246 246)'}
      height="100vh"
      flexDirection={'column'}
      alignItems="center"
    >
      <Container
        bg={'white'}
        centerContent
        borderRadius={'16px'}
        width="70%"
        maxW="4xl"
        margin={'60px'}
        mb="20px"
        height="27.5rem"
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
              NAME
            </Text>
            <Flex>
              <InfoIcon mt="4px" alignItems={'center'} mr="10px" />
              <Input
                paddingBlock={'3px'}
                height="24px"
                placeholder="Enter your name"
                fontSize={'16px'}
                variant={'flushed'}
                value={name}
                type="text"
                name="name"
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
              EMAIL
            </Text>
            <Flex>
              <EmailIcon mt="4px" alignItems={'center'} mr="10px" />
              <Input
                paddingBlock={'3px'}
                height="24px"
                placeholder="Enter your mobile number"
                fontSize={'16px'}
                variant={'flushed'}
                type="email"
                value={email}
                onChange={handlechange}
                name="email"
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
              <ViewIcon mt="4px" alignItems={'center'} mr="10px" />
              <Input
                paddingBlock={'3px'}
                height="24px"
                placeholder="Enter your mobile number"
                fontSize={'16px'}
                variant={'flushed'}
                type="password"
                name="password"
                value={password}
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
            >
              SIGNUP
            </Button>
            <br />
            <br />
            <Text textAlign={'center'}>
              Already have an account{' '}
              <Link style={{ color: 'rgb(240, 105, 154) ' }} to="/Login">
                Login
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

export default Signup
