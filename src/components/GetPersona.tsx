import { useEffect, useState } from "react";
import axios from "axios";

interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  codigo_pais: string;
  telefono: string;
  tipo_documento: { descripcion: string };
  nro_documento: string;
}

export function GetPersona() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4YTgxN2QxNi03MWQ4LTQ2N2MtOTBlMi05YzA0M2YyNTJkZDIiLCJuYW1lIjoiQUxGT05TTyIsImlhdCI6MTc0Njc1MzE5OSwiZXhwIjoxNzQ2OTI1OTk5fQ.vLn8B1BJFct7gui21vy4gcYnPkZrWsM_HCNisPMD3_M';

    axios.get('http://178.128.151.58:8081/api/persona', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      const items = response.data?.data?.items;
      if (Array.isArray(items)) {
        setPersonas(items);
      } else {
        setError('Datos inesperados en la respuesta');
      }
    })
    .catch(err => {
      setError('Error al obtener datos');
      console.error(err);
    });
  }, []);
  return (
    <div>
      <h1>Lista de Personas</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {personas.map(persona => (
          <li key={persona.id}>
            <strong>{persona.nombre} {persona.apellido}</strong><br />
            Correo: {persona.correo}<br />
            Teléfono: {persona.codigo_pais} {persona.telefono}<br />
            Documento: {persona.tipo_documento.descripcion} - {persona.nro_documento}
          </li>
        ))}
      </ul>
    </div>
  );
}
