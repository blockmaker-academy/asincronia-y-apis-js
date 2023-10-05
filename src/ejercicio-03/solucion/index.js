async function operacionAsincronica() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return 'Operación completada'
}

async function ejecutarOperacion() {
  const resultado = await operacionAsincronica()
  console.log(resultado)
}

ejecutarOperacion()
