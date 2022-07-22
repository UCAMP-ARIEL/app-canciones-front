import React from 'react'
import { Input  } from '@nextui-org/react';
import { Button } from "@nextui-org/react";
import { Container } from '@nextui-org/react';

const Formulario = () => {
  return (
    <Container css={{ d: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>
        <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
        <Input labelPlaceholder="Artista" />
        <Button color="warning" auto>
          buscar
        </Button>
        </div>
      
        <div style={{display:'flex', justifyContent:'center', marginTop:'15px'}}>
        <Input labelPlaceholder="Letra" />
        <Button color="warning" auto>
          buscar
        </Button>
        </div>
    </Container>
  )
}

export default Formulario
