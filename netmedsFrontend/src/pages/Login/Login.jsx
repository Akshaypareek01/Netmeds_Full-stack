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
const LoginPage = () => {
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
        height="27rem"
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
            <Text fontSize={'13px'} color="#24aeb1" paddingBlock={'3px'}>
              EMAIL
            </Text>

            <Input
              paddingBlock={'3px'}
              height="24px"
              placeholder="Enter your mobile number"
              fontSize={'16px'}
              variant={'flushed'}
              type="email"
            />
            <br />
            <br />
            <Text fontSize={'13px'} color="#24aeb1" paddingBlock={'3px'}>
              PASSWORD
            </Text>
            <Input
              paddingBlock={'3px'}
              height="24px"
              placeholder="Enter your mobile number"
              fontSize={'16px'}
              variant={'flushed'}
              type="password"
            />
            <Button
              type="submit"
              mt="34px"
              bg={'rgb(50,174,177)'}
              color="white"
              fontSize="16px"
              paddingBlock={'10px'}
              height="41px"
              width={'100%'}
              _hover={{ background: 'rgb(50,174,177)' }}
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
