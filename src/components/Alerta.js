import React from "react";
import { Text } from "@nextui-org/react";

const Alerta = ({ alerta }) => {
  return (
    <div style={{marginTop:'10px', display:'block', textAlign:'center'}}>
      <Text
        color="error"
        css={{
          marginTop: '15px',
          textAlign: 'center',
          border: 'red solid 1.5px',
          backgroundColor: 'white',
          display: 'inline-block',
          paddingLeft: '60px',
          paddingRight: '60px',
          borderRadius: '10px'
        }}
      >
        {alerta}
      </Text>
    </div>
  );
};

export default Alerta;
