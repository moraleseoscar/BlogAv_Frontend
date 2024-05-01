import { useState, useEffect } from "react";

function useApi(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false); // Nuevo estado para controlar si los datos ya se han obtenido

  useEffect(() => {
    if (!fetched) {
      // Verificar si los datos ya se han obtenido antes de realizar la solicitud
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error("Error en la solicitud al servidor");
          }
          const responseData = await response.json();
          setData(responseData);
          setError(null);
          setFetched(true); // Establecer fetched a true después de obtener los datos
        } catch (error) {
          setError(error);
          setData(null);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [url, options, fetched]); // Asegúrate de incluir fetched como dependencia para que se realice la solicitud solo una vez

  return { data, loading, error };
}

export default useApi;
