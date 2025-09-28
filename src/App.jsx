import { Box } from '@chakra-ui/react';
import LoginLeft from './components/LoginLeft';
import LoginRight from './components/LoginRight';

function App() {
  return (
    <Box
      as='main'
      bg='#fff'
      h={{ base: 'auto', md: '100vh' }}
      w='100%'
      overflow='auto'
    >
      <Box
        display='flex'
        h={{ base: 'auto', md: '100vh' }}
        w='100%'
        flexDirection={{ base: 'column', md: 'row' }}
        overflow='visible'
      >
        <LoginLeft />
        <LoginRight />
      </Box>
    </Box>
  );
}

export default App;
