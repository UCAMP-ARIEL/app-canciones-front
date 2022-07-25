import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import ResultadosAlbum from "./ResultadosAlbum";

const Formulario = () => {
  return (
    <Grid
      xs={12}
      sm={6}
      css={{ d: "flex", flexWrap: "nowrap", flexDirection: "column" }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Input placeholder="Artista" />
        <Button color="warning" auto>
          buscar
        </Button>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <Input placeholder="Letra" />
        <Button color="warning" auto>
          buscar
        </Button>
      </div>

      <ResultadosAlbum />
    </Grid>
  );
};

export default Formulario;
