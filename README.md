# Ejercicio de CSS: Armonía de Colores, Corrección de Errores y Colores RGB 🎨

## Descripción del Ejercicio

En este ejercicio, vamos a trabajar con diferentes aspectos de la gestión de colores en CSS para mejorar el diseño y la legibilidad de un sitio web. Aquí cubriremos tres tareas principales:

1. **Armonía de Colores** 🌈
2. **Identificación y Corrección de Errores de Colores** 🚫
3. **Jugando con Colores RGB** 🎨

## 1. Armonía de Colores 🌈

**Objetivo:** Crear una paleta de colores armoniosa para tu sitio web utilizando la Rueda de Colores de Adobe.

**Pasos a seguir:**

- Selecciona un color principal y dos colores secundarios.
- Aplica estos colores en el archivo `style.css`.
- Utiliza el color principal para el fondo de la página.
- Usa los colores secundarios para el texto en diferentes elementos, como títulos y párrafos.

**Ejemplo de Código:**

```css
/* style.css */

/* Color principal como fondo de la página */
body {
    background-color: #3498db; /* Azul */
    color: #F6F6F6; /* Texto en color claro */
}

/* Color secundario 1 para los títulos */
h1, h2, h3, h4, h5, h6 {
    color: #e67e22; /* Naranja */
}

/* Color secundario 2 para los párrafos */
p {
    color: #2ecc71; /* Verde */
}

## 2. Identificación y Corrección de Errores de Colores 🚫
Objetivo: Corregir un error de visibilidad de texto en el proyecto.

Problema: El texto es invisible porque el color del texto y el color de fondo son iguales.

Pasos a seguir:

Cambia el color del texto a uno visible para que sea legible contra el fondo oscuro.
/* style.css */

/* Fondo negro */
body {
    background-color: #000000; /* Fondo oscuro */
    color: #F6F6F6; /* Texto en color claro para mejor visibilidad */
}

## 3. Jugando con Colores RGB 🎨
Objetivo: Experimentar con la representación de colores en formato RGB.

Pasos a seguir:

Elige dos colores: uno para el fondo y otro para el texto.
Aplica estos colores en el archivo style.css utilizando la notación hexadecimal RGB.
/* style.css */

body {
    background-color: #FF5733; /* Naranja vibrante */
    color: #00FF00; /* Verde brillante */
}
## Recursos Adicionales
Rueda de Colores de Adobe
Guía de Colores en CSS
¡Diviértete explorando el mundo del diseño de colores en CSS! 🎉

## Estructura del Proyecto

El proyecto contiene las siguientes páginas y archivos:

### Páginas

- **`index.html`**: Página de inicio que presenta los ejercicios de HTML y CSS.
- **`about.html`**: Información sobre Leon Carrazco.
- **`games.html`**: Lista de los juegos favoritos de Leon.
- **`videos.html`**: Galería de videos grabados por Leon.
- **`contacto.html`**: Formulario de contacto para enviar mensajes.

### Archivos CSS

- **`css/colorido.css`**: Estilo colorido y divertido.
- **`css/formal.css`**: Estilo formal y elegante.
- **`css/minimalista.css`**: Estilo minimalista y limpio.

### Archivo JavaScript

- **`js/app.js`**: Script para manejar la interacción del formulario de contacto.

## Cómo Usar

1. **Configura el Proyecto**: Asegúrate de tener todos los archivos del proyecto en la estructura de carpetas correcta:
    ```
    /project-root
    ├── css
    │   ├── colorido.css
    │   ├── formal.css
        ├── armoniaDeColores.css
    │   └── minimalista.css
    ├── js
    │   └── app.js
    ├── index.html
    ├── about.html
    ├── games.html
    ├── videos.html
    └── contacto.html
    ```

2. **Abrir el Proyecto**: Puedes abrir el archivo `index.html` en un navegador web para ver la página de inicio y navegar a otras páginas desde allí.

3. **Cambiar el Estilo**: Modifica la etiqueta `<link>` en cada archivo HTML para aplicar diferentes estilos de CSS según el diseño deseado.

4. **Editar Contenido**: Actualiza el contenido en los archivos HTML según sea necesario para personalizar el sitio web.

5. **Probar JavaScript**: Asegúrate de que el archivo `app.js` esté correctamente vinculado en el HTML y verifica que el formulario de contacto funcione correctamente.

## Descripción de los Archivos

- **`index.html`**: Página de inicio con un ejemplo de los tres estilos de CSS. Permite cambiar entre estilos comentando y descomentando las líneas de `<link>` para los archivos CSS.
- **`about.html`**: Página que proporciona información sobre Leon Carrazco.
- **`games.html`**: Muestra una lista de los juegos favoritos de Leon.
- **`videos.html`**: Contiene una galería de videos grabados por Leon.
- **`contact.html`**: Incluye un formulario de contacto para que los visitantes puedan enviar mensajes a Leon.

## Requisitos

- Un navegador web moderno para visualizar las páginas HTML.
- Un editor de código para hacer cambios en los archivos del proyecto.

## Contribuciones

Si deseas contribuir al proyecto, por favor haz un fork del repositorio y envía un pull request con tus cambios. Asegúrate de seguir las directrices de estilo y mantener la coherencia del código.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

---


Este archivo `README.md` proporciona una descripción clara del ejercicio y ejemplos de código para cada tarea.
