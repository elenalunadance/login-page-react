import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Text,
  Link,
  Flex,
  Alert,
  AlertIcon,
  Image,
} from '@chakra-ui/react';
import logo from 'img/logo.png';
import iconGoogle from 'img/icon-google.png';
import googlePlay from 'img/google-play.png';
import appStore from 'img/app-store.png';

const LoginRight = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    agreeTerms: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.emailOrPhone ||
      !formData.dateOfBirth ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.agreeTerms
    ) {
      setError('All fields are required, including agreement to Terms');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSuccess('Account created successfully!');
    }
  };

  return (
    <Box
      bg='white'
      borderRadius={{ md: 'md', base: '0' }}
      h='100%'
      maxH={{ base: 'none', md: '100vh' }}
      w={{ xl: '55%', lg: '55%', md: '55%', base: '100%' }}
      p={{
        xl: '3rem 8rem 1.5rem 6rem',
        lg: '1rem 1rem 1rem 1rem',
        md: '1.5rem 2rem 0.75rem 1.5rem',
        base: '1rem 1rem 0.5rem 1rem',
      }}
      position='relative'
      overflowY='visible'
    >
      <Flex
        gap={{ xl: 2, lg: 2, md: 1, base: 1 }}
        alignItems='center'
        mb={{ xl: 2, lg: 2, md: 1, base: 1 }}
      >
        <Image
          src={logo}
          alt='Logo'
          w={{ xl: '2.56rem', lg: '2rem', md: '1.5rem', base: '1.5rem' }}
          h={{ xl: '3rem', lg: '2.5rem', md: '1.875rem', base: '1.875rem' }}
        />
        <Text fontWeight='bold'>Logo</Text>
      </Flex>
      <Text
        fontSize={{ xl: '3xl', lg: '2xl', md: 'xl', base: 'lg' }}
        fontWeight='semibold'
      >
        Create account
      </Text>
      <Text mb={{ xl: 6, lg: 4, md: 2, base: 2 }}>
        For business, band or celebrity.
      </Text>
      <Box
        maxH={{ xl: '50px', lg: '30px', md: '20px', base: '20px' }}
        mb={{ xl: 2, lg: 1, md: 1, base: 1 }}
      >
        {error && (
          <Alert
            status='error'
            fontSize={{ xl: '12px', lg: '10px', md: '8px', base: '8px' }}
          >
            <AlertIcon />
            {error}
          </Alert>
        )}
        {success && (
          <Alert
            status='success'
            fontSize={{ xl: '12px', lg: '10px', md: '8px', base: '8px' }}
          >
            <AlertIcon />
            {success}
          </Alert>
        )}
      </Box>
      <form onSubmit={handleSubmit}>
        <Flex
          mb={{ xl: 6, lg: 4, md: 3, base: 2 }}
          gap={{ xl: 6, lg: 5, md: 4, base: 2 }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <FormControl>
            <FormLabel
              fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
            >
              First name
            </FormLabel>
            <Input
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
            >
              Last name
            </FormLabel>
            <Input
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormControl>
        </Flex>
        <Flex
          mb={{ xl: 6, lg: 4, md: 3, base: 2 }}
          gap={{ xl: 6, lg: 5, md: 4, base: 2 }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <FormControl>
            <FormLabel
              fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
            >
              Email or phone number
            </FormLabel>
            <Input
              name='emailOrPhone'
              value={formData.emailOrPhone}
              onChange={handleChange}
              type='email'
            />
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
            >
              Date of birth
            </FormLabel>
            <Input
              name='dateOfBirth'
              value={formData.dateOfBirth}
              onChange={handleChange}
              type='date'
            />
          </FormControl>
        </Flex>
        <Flex
          mb={{ xl: 4, lg: 3, md: 2, base: 2 }}
          gap={{ xl: 6, lg: 5, md: 4, base: 2 }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <FormControl>
            <FormLabel
              fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
            >
              Password
            </FormLabel>
            <Input
              name='password'
              value={formData.password}
              onChange={handleChange}
              type='password'
            />
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
            >
              Confirm password
            </FormLabel>
            <Input
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              type='password'
            />
          </FormControl>
        </Flex>
        <Flex
          justifyContent='space-between'
          alignItems='center'
          fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
          mb={{ xl: 4, lg: 3, md: 2, base: 1 }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Checkbox
            name='rememberMe'
            isChecked={formData.rememberMe}
            onChange={handleChange}
          >
            Remember me
          </Checkbox>
          <Link
            color='blue.500'
            mb={{ xl: 4, lg: 3, md: 2, base: 1 }}
            display='block'
          >
            Forgot password?
          </Link>
        </Flex>
        <Flex
          mb={{ xl: 4, lg: 3, md: 2, base: 1 }}
          alignItems='center'
          flexDirection='row'
        >
          <Checkbox
            name='agreeTerms'
            isChecked={formData.agreeTerms}
            onChange={handleChange}
            mb={{ xl: 4, lg: 3, md: 2, base: 1 }}
            fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
          >
            I agree to all the <Link color='blue.500'>Terms</Link> and{' '}
            <Link color='blue.500'>Privacy policy</Link>
          </Checkbox>
        </Flex>
        <Flex
          mb={{ xl: 4, lg: 3, md: 2, base: 2 }}
          gap={{ xl: 6, lg: 5, md: 4, base: 2 }}
          flexDirection={{ base: 'column', md: 'row' }}
          fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
        >
          <Button
            type='submit'
            colorScheme='blue'
            width='full'
            h={{ xl: '48px', lg: '40px', md: '35px', base: '35px' }}
          >
            Create account
          </Button>
          <Button
            variant='outline'
            width='full'
            bg='black'
            color='white'
            h={{ xl: '48px', lg: '40px', md: '35px', base: '35px' }}
          >
            <Image
              src={iconGoogle}
              alt='Google'
              mr={2}
              w='auto'
              h={{ xl: '20px', lg: '15px', md: '10px', base: '10px' }}
            />{' '}
            Sign-in with Google
          </Button>
        </Flex>
        <Flex
          justifyContent='center'
          gap='1'
          fontSize={{ xl: '14px', lg: '12px', md: '10px', base: '12px' }}
        >
          <Text>Don't have an account?</Text>
          <Link color='blue.500'> Log in</Link>
        </Flex>
      </form>
      <Flex
        mt={{ xl: '4rem', lg: '2rem', md: '0.5rem', base: '0.5rem' }}
        mb={{ xl: '1rem', lg: '1rem', md: '0.5rem', base: '0.5rem' }}
        gap={{ xl: 2, lg: 2, md: 1, base: 1 }}
      >
        <Button variant='link' p={0}>
          <Image
            src={googlePlay}
            alt='Google Play'
            w='auto'
            h={{ xl: '40px', lg: '30px', md: '20px', base: '20px' }}
          />{' '}
        </Button>
        <Button variant='link' p={0}>
          <Image
            src={appStore}
            alt='App Store'
            w='auto'
            h={{ xl: '40px', lg: '30px', md: '20px', base: '20px' }}
          />{' '}
        </Button>
      </Flex>
    </Box>
  );
};

export default LoginRight;
