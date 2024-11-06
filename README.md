# Proyecto E-commerce de Juegos

Este es un proyecto de e-commerce desarrollado con React y Firebase, diseñado para la venta de productos del rubro de videojuegos. La aplicación permite a los usuarios navegar, seleccionar productos y realizar compras.

## Funcionalidades Principales

- **Navegación**: Los usuarios pueden ingresar a la aplicación y navegar por un catálogo de productos, filtrando por categorías. Realicé tres categorías: juegos de Nintendo, juegos de Ps5 y juegos de xbox.
- **Detalles del Producto**: Al hacer clic en un producto, los usuarios pueden ver su descripción, precio y una imagen, además de la opción de agregarlo al carrito.
- **Carrito de Compras**: Una vez que hay productos en el carrito, se muestra un resumen con el precio total. Los usuarios pueden ingresar su información para realizar la compra. El logo del carrito aparece visible siempre en toda la página.
- **Checkout**: Los usuarios pueden revisar sus productos, ingresar su información personal y finalizar la compra. Una vez finalizada la compra le entrega el id y les agradece por haber comprado en la tienda. Al mismo tiempo, el carrito se vacía.
- **Persistencia de Datos**: Todos los productos y órdenes se almacenan en una base de datos de Firebase, garantizando que la información esté actualizada y accesible. Cuando ingreso a la base de datos de Firebase puedo ver la orden generada con el pedido del usuario.

## Dependencias Utilizadas

- `firebase`: Para la gestión de la base de datos en tiempo real.
- `react-router-dom`: Para manejar la navegación entre diferentes vistas de la aplicación.
- `sweetalert`: Para mejorar la experiencia del usuario con alertas y mensajes.
- `sass` : Para darle estilos a la aplicación de forma más eficiente. De todas maneras, muchos de los estilos también se encuentran en línea, debido a que me pareció más pertinente e inmediato en el momento de realizarlo.

### Justificación de Librerías Adicionales

**SweetAlert**: Se utiliza para mostrar alertas y mensajes interactivos, mejorando la comunicación con el usuario, especialmente al agregar o eliminar productos del carrito. Esto hace que la experiencia sea más amigable y visualmente atractiva. Cuando agregás un producto al carrito y presenta un popup que te da el aviso que se agregó el producto al carrito. En el caso de que luego lo quieras eliminar te pregunta si realmente querés eliminar el producto del carrito.
