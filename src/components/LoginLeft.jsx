import { Box, Text, Image } from '@chakra-ui/react';
import phone from 'img/phone.png';

const LoginLeft = () => {
  return (
    <Box
      bg='linear-gradient(316deg, #007aff 0%, #0f70da 100%)'
      p={30}
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      maxW='814px'
      maxH='100vh'
      w='45%'
      h='100%'
      alignItems='center'
      gap={10}
      position='relative'
      overflow='visible'
    >
      <Text
        fontSize='3xl'
        fontWeight='semibold'
        mb={4}
        color='white'
        textAlign='center'
        pl={{ md: 8, lg: 8, xl: 28 }}
        pr={{ md: 8, lg: 8, xl: 28 }}
        maxH='150px'
      >
        Social media shared today, tomorrow or by location
      </Text>
      <Box
        as='svg'
        width={{ md: '27rem', lg: '30rem', xl: '37rem' }}
        height='37rem'
        viewBox='0 0 593 594'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        position='relative'
        zIndex='0'
      >
        <circle
          cx='296.5'
          cy='297.377'
          r='296.5'
          fill='url(#paint0_linear_2_236)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2_236'
            x1='582.385'
            y1='593.877'
            x2='111.22'
            y2='-77.2092'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#0F70DA' />
            <stop offset='1' stopColor='#007AFF' />
          </linearGradient>
        </defs>
      </Box>
      <Box
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        zIndex='1'
        overflow='visible'
        width={{ md: '27rem', lg: '30rem', xl: '37rem' }}
        height='37rem'
      >
        <Image
          src={phone}
          alt='Phone'
          objectFit='contain'
          w={{ md: '23rem', lg: '25rem', xl: '39.38rem' }}
          maxH='630px'
          maxW='440px'
          top={{ md: '20%', lg: '20%', xl: '18%' }}
          left='50%'
          transform='translateX(-50%)'
          position='absolute'
          zIndex='1'
          opacity='1'
        />
      </Box>
    </Box>
  );
};

export default LoginLeft;
