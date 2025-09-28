import { Box, Text, Image } from '@chakra-ui/react';
import phone from 'img/phone.png';

const LoginLeft = () => {
  return (
    <Box
      bg='linear-gradient(316deg, #007aff 0%, #0f70da 100%)'
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
      alignItems='center'
      maxW={{ xl: '814px', lg: '700px', md: '600px', base: '100%' }}
      w={{ xl: '45%', lg: '45%', md: '45%', base: '100%' }}
      h='100%'
      gap={{ xl: 10, lg: 8, md: 6, base: 4 }}
      overflowY='visible'
      minHeight='0'
      flexGrow={1}
    >
      <Text
        fontSize={{ xl: '3xl', lg: '2xl', md: 'xl', base: 'lg' }}
        fontWeight='semibold'
        pl={{ md: 8, lg: 8, xl: 20 }}
        pr={{ md: 8, lg: 8, xl: 20 }}
        color='white'
        textAlign='center'
      >
        Social media shared today, tomorrow or by location
      </Text>
      {/* Круг и смартфон */}
      <Box
        position='relative'
        width={{ xl: '37rem', lg: '85%', md: '80%', base: '75%' }}
        height={{ xl: '39.38rem', lg: '85%', md: '80%', base: '75%' }}
        maxWidth={{ xl: '37rem', lg: '32rem', md: '27rem', base: '20rem' }}
        maxHeight='39.38rem'
        overflow='visible'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          as='svg'
          width='95%'
          height='95%'
          viewBox='0 0 593 594'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          position='absolute'
          top='0'
          left='0'
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
        <Image
          src={phone}
          alt='Phone'
          objectFit='contain'
          maxW='440px'
          maxH={{ xl: '39.38rem', lg: '30rem', md: '24rem', base: '20rem' }}
          position='relative'
          zIndex='1'
          opacity='1'
          margin='0'
          display='block'
          style={{ left: '-2%' }}
        />
      </Box>
    </Box>
  );
};

export default LoginLeft;
