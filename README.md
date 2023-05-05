# Pasos para generar un simulador offline con electron
- Instalar paquetes necesarios ejecutando `npm install`.
- Generar el simulador con `votar simulador`.
- Copiar el simulador a empaquetar con electron con `cp -v /tmp/simulador ./` (suponiendo que se está parado en la carpeta de este README).
- Empaquetar el simulador offline:
    - Windows: `npm run package-win`
    - Linux: `npm run package-linux`
    - Mac: `npm run package-mac`

Los entregables quedan en la carpeta release-builds.