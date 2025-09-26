
// simulacro de API
 
 function simularPeticionAPI() 
 {
   return new Promise(resolve =>
     {
      setTimeout(() => 
        {
          resolve("Datos recibidos correctamente");
        }, 5000);
     });
}

async function obtenerDatos() 
{
  console.log("Cargando datos...")
  const datos = await simularPeticionAPI();
  console.log(datos);
}

obtenerDatos();