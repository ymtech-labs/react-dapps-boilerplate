import { Button } from '@mantine/core';
import { useState } from 'react';
import { Alien } from 'tabler-icons-react';

function Buttons() {

  const [loading, setLoading] = useState(false);
  /*
    var _useState = useState(false) //=> [loading.getValue(), loading.setValue()]    
    loading = _useState[0],
    setLoading = _useState[1];
  */

  const handleClick = () => {
        setLoading(true); 
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap:10, padding:50, flexWrap:'wrap' }}>  
        <Button leftIcon={<Alien/>} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
        <Button loading={loading} loaderPosition="right" onClick={handleClick} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button>
        <Button component="a" href="https://google.com" target="_blank" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Google blue</Button>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
        <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
    </div>
  )
}

export default Buttons