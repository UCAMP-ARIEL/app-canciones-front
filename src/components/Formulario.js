import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import ResultadosAlbum from "./ResultadosAlbum";
import Alerta from "./Alerta";
import axios from "axios";

const Formulario = () => {
  const [artista, setArtista] = useState("");
  const [letra, setLetra] = useState("");
  const [alerta, setAlerta] = useState("");

  const buscarPorArtista = async () => {
    if (!artista) {
      return setAlerta("debes llenar el campo de artista");
    }
    setAlerta("");
    //llamar a la API
    try {
      const respuesta = axios.get(
        `http://localhost:4000/lyrics/get-songs?artist=${artista}`
      );
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }

    //resetear input
    setArtista("");
  };

  const buscarPorLetra = async () => {
    if (!letra) {
      return setAlerta("debes llenar el campo de letra");
    }
    setAlerta("");
    //llamar a la API
    try {
      const respuesta = axios.get(
        `http://localhost:4000/lyrics/get-songs?title=${letra}`
      );
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
    //resetear input
    setArtista("");
  };

  return (
    <Grid
      xs={12}
      sm={6}
      css={{ d: "flex", flexWrap: "nowrap", flexDirection: "column" }}
    >
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Input
          aria-label="searchArtista"
          onChange={(e) => setArtista(e.target.value)}
          value={artista}
          name="artista"
          placeholder="Artista"
        />
        <Button
          onClick={buscarPorArtista}
          style={{ marginLeft: "15px" }}
          color="warning"
          auto
        >
          buscar
        </Button>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <Input
          aria-label="searchLetra"
          onChange={(e) => setLetra(e.target.value)}
          value={letra}
          name="letra"
          placeholder="Letra"
        />
        <Button
          onClick={buscarPorLetra}
          style={{ marginLeft: "15px" }}
          color="warning"
          auto
        >
          buscar
        </Button>
      </div>

      {alerta && <Alerta alerta={alerta} />}

      <ResultadosAlbum />
    </Grid>
  );
};

export default Formulario;
