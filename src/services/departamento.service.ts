import axios from "axios";
import { loadAbort } from "../utilities/load-abort-axios";
import { Departamento } from "../models/departamento";

export const login = () => {
  const controller = loadAbort();
  return {
    call: axios.get<Departamento>("https://rickandmortyapi.com/api/character/2", {
      signal: controller.signal,
    }),
    controller,
  };
};
