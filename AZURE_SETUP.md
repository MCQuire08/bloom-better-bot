# Golden Bloom en Azure

## Recursos necesarios

1. Un tenant externo de Microsoft Entra External ID.
2. Una aplicación SPA y una aplicación/API registrada en ese tenant.
3. Azure SQL Database con el script `azure/schema.sql` ejecutado.
4. Azure Static Web Apps conectado a este repositorio.

## Variables del frontend

Configurar como variables del repositorio de GitHub:

- `VITE_AZURE_TENANT_NAME`
- `VITE_AZURE_CLIENT_ID`
- `VITE_AZURE_API_CLIENT_ID`

La aplicación SPA debe tener como URI de redirección el dominio de Static Web Apps y el dominio final de Golden Bloom. La API debe exponer el scope `access_as_user` y autorizar a la SPA.

## Configuración de la API

Agregar en Configuration de Static Web Apps:

- `AZURE_TENANT_NAME`
- `AZURE_TENANT_ID`
- `AZURE_API_CLIENT_ID`
- `SQL_CONNECTION_STRING`
- `ADMIN_EMAILS` (lista separada por comas)

Nunca guardar secretos ni la cadena de conexión en GitHub o en archivos `.env`.

## Reglas del programa

- Solo los pedidos que un administrador confirma como pagados suman un sello.
- El pedido 5 crea un beneficio de envío gratis.
- El pedido 10 crea un crédito igual al 10% de lo pagado durante el ciclo.
- La siguiente compra confirmada después del pedido 10 inicia un ciclo nuevo.

