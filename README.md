## Aplicación Angular de Gestión Básico

**Descripción del Proyecto**

¡Bienvenido/a a la Aplicación de Gestión! Esta es una aplicación frontend desarrollada con Angular (versión 18.2.19) y que utiliza Angular Material para ofrecer una interfaz de usuario moderna y atractiva.

Nuestra aplicación te permite administrar de forma sencilla usuarios, productos y roles de administrador. Para ello, interactúa directamente con una API construida en Node.js, asegurando una gestión de datos eficiente y centralizada. Además, incluye un componente de prueba inicial que puedes encontrar en `/api/test` para verificar la correcta comunicación con el backend, el cual te mostrará un "Hola Mundo".

**Tecnologías Utilizadas**

A continuación, se detallan las principales tecnologías utilizadas en este proyecto:

*   **Angular:** v18.2.19 (Framework principal para la construcción de la interfaz de usuario)
*   **Angular Material:** v18.2.5 (Biblioteca de componentes de UI basados en Material Design; el `package.json` especifica `^18.2.14`)
*   **TypeScript:** ~5.5.4 (Superset de JavaScript que añade tipado estático)
*   **Node.js:** v20.x (Entorno de ejecución para JavaScript, recomendado para la API backend. Se ha reportado uso de v22.15.0, pero v20.x es preferible para mayor compatibilidad)
*   **RxJS:** (Biblioteca para la programación reactiva, utilizada para manejar operaciones asíncronas como las peticiones HTTP)
*   **Angular CLI:** (Herramienta de línea de comandos para el desarrollo, construcción y mantenimiento de aplicaciones Angular)

## Estructura del Proyecto

A continuación, se describe la organización principal de los directorios y archivos del proyecto:

```
angular-app/
├── src/
│   ├── app/
│   │   ├── components/                 # Componentes de la interfaz de usuario
│   │   │   ├── admin/                  # Componentes para la gestión de administradores (ej. admin-list, admin-form)
│   │   │   ├── product/                # Componentes para la gestión de productos (ej. product-list, product-form)
│   │   │   ├── test/                   # Componentes de prueba (ej. test.component)
│   │   │   └── user/                   # Componentes para la gestión de usuarios (ej. user-list, user-form)
│   │   ├── models/                     # Definiciones de modelos de datos (interfaces TypeScript)
│   │   │   ├── admin.model.ts
│   │   │   ├── product.model.ts
│   │   │   └── user.model.ts
│   │   ├── services/                   # Servicios para lógica de negocio y comunicación con API
│   │   │   ├── api.service.ts
│   │   │   └── error-handler.service.ts
│   │   ├── app-routing.module.ts       # Configuración de las rutas principales de la aplicación
│   │   ├── app.component.css           # Estilos para el componente raíz de la aplicación
│   │   ├── app.component.html          # Plantilla HTML para el componente raíz
│   │   ├── app.component.spec.ts       # Pruebas unitarias para el componente raíz
│   │   ├── app.component.ts            # Lógica del componente raíz de la aplicación
│   │   ├── app.module.ts               # Módulo raíz de Angular, declara componentes y dependencias
│   │   └── material.module.ts          # Módulo dedicado a la importación de componentes de Angular Material
│   ├── environments/                   # Archivos de configuración específicos del entorno
│   │   ├── environment.prod.ts         # Configuración para el entorno de producción
│   │   └── environment.ts              # Configuración para el entorno de desarrollo
├── package.json                        # Define las dependencias del proyecto y scripts npm
```

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1.  **Clona el Repositorio:**
    Si aún no lo has hecho, clona el repositorio en tu máquina local usando el siguiente comando en tu terminal:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
    Luego, navega al directorio del proyecto:
    ```bash
    cd angular-app
    ```
    *(Reemplaza `<URL_DEL_REPOSITORIO>` con la URL real del repositorio).*

2.  **Instala las Dependencias:**
    Una vez dentro del directorio `angular-app`, instala todas las dependencias necesarias del proyecto. Ejecuta:
    ```bash
    npm install
    ```
    Este comando leerá el archivo `package.json` y descargará las bibliotecas requeridas, incluyendo Angular, Angular Material y otras dependencias.

3.  **Configura las Variables de Entorno:**
    Es crucial configurar correctamente la URL de la API para que la aplicación frontend pueda comunicarse con el backend.
    *   Abre el archivo `src/environments/environment.ts`.
    *   Verifica que el contenido sea similar a este:
        ```typescript
        export const environment = {
          production: false,
          apiUrl: 'http://localhost:3000/api' // Asegúrate de que esta URL sea correcta
        };
        ```
    *   **Importante:** Asegúrate de que el valor de `apiUrl` apunte a la dirección correcta donde tu API de Node.js está siendo ejecutada (por defecto, `http://localhost:3000/api`).

4.  **Configura Angular Material (Si es necesario):**
    Si Angular Material no se configuró previamente o estás iniciando un proyecto desde cero y quieres añadirlo:
    *   Ejecuta el siguiente comando para añadir Angular Material al proyecto. Esto instalará la biblioteca y te permitirá elegir configuraciones iniciales:
        ```bash
        ng add @angular/material
        ```
    *   Durante el proceso de instalación, se te pedirá:
        *   **Elegir un tema preconstruido:** Selecciona uno que se ajuste a tus preferencias (por ejemplo, Indigo/Pink, o crea uno personalizado más adelante).
        *   **Configurar las Gesturas Globales de Tipografía de Angular Material:** Es recomendable responder "Yes" (Sí).
        *   **Habilitar las animaciones de Angular Material:** Responde "Yes" (Sí) para incluir el `BrowserAnimationsModule` en tu `app.module.ts`, lo cual es necesario para que la mayoría de los componentes de Angular Material funcionen correctamente.

    *(Nota: El comando `ng add @angular/material` generalmente instala una versión compatible con tu versión actual de Angular. El `package.json` especifica una versión como `^18.2.14` para `@angular/material`, y el comando `ng add` se encargará de gestionar la compatibilidad.)*

## Ejecución de la Aplicación

Para iniciar la aplicación en tu entorno de desarrollo local, sigue estos pasos:

1.  **Inicia el Servidor de Desarrollo:**
    Ejecuta el siguiente comando en la terminal, dentro del directorio raíz del proyecto (`angular-app`):
    ```bash
    ng serve --no-hmr
    ```
    *   El comando `ng serve` compila la aplicación y la sirve localmente.
    *   La opción `--no-hmr` (No Hot Module Replacement) se utiliza para desactivar el reemplazo de módulos en caliente. Aunque HMR es útil, a veces puede causar problemas de estado en aplicaciones más complejas o durante la configuración inicial; usar `--no-hmr` asegura un comportamiento más estable si se presentan inconvenientes.

2.  **Accede a la Aplicación:**
    Una vez que el servidor de desarrollo esté en funcionamiento (generalmente lo indicará en la terminal), abre tu navegador web y dirígete a:
    `http://localhost:4200`

    La aplicación se ejecutará por defecto en este puerto.

## Verificar el Componente de Prueba

Para asegurar que la aplicación frontend se está comunicando correctamente con el backend (API Node.js) y que la configuración básica es correcta, puedes verificar el componente de prueba:

1.  **Abre la Ruta de Prueba:**
    En tu navegador, ve a una de las siguientes URLs:
    *   `http://localhost:4200/` (esta ruta usualmente redirige a `/test`)
    *   `http://localhost:4200/test`

2.  **Confirma el Mensaje:**
    Si todo está configurado correctamente, deberías ver el mensaje "Hola Mundo" en la página. Este mensaje es servido desde el endpoint `/api/test` de tu API backend, lo que confirma que la comunicación entre el frontend y el backend está funcionando.

## Rutas de la Aplicación

A continuación, se describen las principales rutas de la aplicación y los componentes que gestionan:

*   **URL Base:** `http://localhost:4200` (donde se sirve la aplicación en desarrollo).

*   **Test (Prueba):**
    *   `/` (ruta raíz): Redirige automáticamente a `/test`.
    *   `/test`: Muestra un mensaje de "Hola Mundo" obtenido desde el backend. Gestionado por `TestComponent`.

*   **Usuarios:**
    *   `/users`: Muestra la lista de todos los usuarios. Gestionado por `UserListComponent`.
    *   `/users/new`: Presenta un formulario para crear un nuevo usuario. Gestionado por `UserFormComponent`.
    *   `/users/edit/:id`: Presenta un formulario para editar un usuario existente, donde `:id` es el identificador del usuario. Gestionado por `UserFormComponent`.

*   **Productos:**
    *   `/products`: Muestra la lista de todos los productos. Gestionado por `ProductListComponent`.
    *   `/products/new`: Presenta un formulario para crear un nuevo producto. Gestionado por `ProductFormComponent`.
    *   `/products/edit/:id`: Presenta un formulario para editar un producto existente, donde `:id` es el identificador del producto. Gestionado por `ProductFormComponent`.

*   **Administradores (Roles):**
    *   `/admin`: Muestra la lista de los roles de administrador asignados. Gestionado por `AdminListComponent`.
    *   `/admin/new`: Presenta un formulario para asignar un nuevo rol de administrador a un usuario. Gestionado por `AdminFormComponent`.
    *   `/admin/edit/:id`: Presenta un formulario para editar un rol de administrador existente, donde `:id` es el identificador del rol. Gestionado por `AdminFormComponent`.

## Componentes Principales

Los componentes son los bloques de construcción fundamentales de la interfaz de usuario en Angular. Los más destacados son:

*   `TestComponent`: Componente simple que muestra el mensaje de prueba "Hola Mundo" obtenido desde la API (`/api/test`), usado para verificar la conectividad con el backend.
*   `UserListComponent`: Muestra una tabla con la lista de usuarios. Proporciona opciones para navegar a la edición de un usuario o para eliminarlo.
*   `UserFormComponent`: Formulario utilizado tanto para la creación de nuevos usuarios como para la edición de usuarios existentes.
*   `ProductListComponent`: Muestra una tabla con la lista de productos disponibles.
*   `ProductFormComponent`: Formulario para la creación y edición de productos.
*   `AdminListComponent`: Muestra una tabla con la lista de roles de administrador (ej. qué usuarios tienen qué rol).
*   `AdminFormComponent`: Formulario para asignar o modificar roles de administrador. Utiliza un control `<mat-select>` para elegir el tipo de rol (por ejemplo, "Admin", "Moderator").

## Servicios

Los servicios en Angular encapsulan lógica de negocio, acceso a datos y otras funcionalidades que pueden ser reutilizadas a través de diferentes componentes.

*   `ApiService`: Se encarga de toda la comunicación con la API backend. Gestiona las peticiones HTTP (GET, POST, PUT, DELETE) para las entidades de usuarios, productos y administradores.
*   `ErrorHandlerService`: Proporciona una manera centralizada de manejar y mostrar mensajes de error o de éxito al usuario, utilizando el componente `MatSnackBar` de Angular Material para notificaciones no intrusivas.

## Modelos de Datos (Interfaces)

Para asegurar la consistencia y el tipado fuerte de los datos que maneja la aplicación, se utilizan las siguientes interfaces TypeScript:

*   **User (Usuario):**
    ```typescript
    export interface User {
      id?: number;            // Identificador único (opcional, generado por el backend)
      username: string;       // Nombre de usuario
      email: string;          // Dirección de correo electrónico
      password?: string;       // Contraseña (opcional en algunas respuestas, manejada con cuidado)
      created_at?: string;     // Fecha de creación (opcional, informativa)
    }
    ```

*   **Product (Producto):**
    ```typescript
    export interface Product {
      id?: number;            // Identificador único del producto
      name: string;           // Nombre del producto
      description?: string;    // Descripción detallada (opcional)
      price: number;          // Precio del producto
      stock: number;          // Cantidad disponible en inventario
      created_at?: string;     // Fecha de creación (opcional, informativa)
    }
    ```

*   **Admin (Rol de Administrador):**
    ```typescript
    export interface Admin {
      id?: number;            // Identificador único del rol asignado
      user_id: number;        // ID del usuario al que se le asigna el rol
      role: string;           // Tipo de rol (ej. "Admin", "Moderator")
      created_at?: string;     // Fecha de asignación del rol (opcional, informativa)
    }
    ```

## Pruebas de Funcionalidad

Para verificar que la aplicación funciona correctamente, puedes realizar las siguientes pruebas manuales:

1.  **Verificar Conexión con API (Componente de Prueba):**
    *   Accede a `http://localhost:4200/test` en tu navegador.
    *   **Resultado Esperado:** Deberías ver el mensaje "Hola Mundo" en la página. Esto confirma que el frontend se comunica con el endpoint `/api/test` del backend.

2.  **Navegación y Carga de Listas:**
    *   Navega a las siguientes rutas:
        *   `/users` (para la lista de usuarios).
        *   `/products` (para la lista de productos).
        *   `/admin` (para la lista de roles de administrador).
    *   **Resultado Esperado:** Confirma que las tablas o listas correspondientes se carguen y muestren los datos (o un estado vacío si no hay datos, pero sin errores).

3.  **Creación de un Nuevo Usuario:**
    *   Ve a la ruta `/users/new`.
    *   Completa el formulario con datos de prueba para un nuevo usuario.
    *   Envía el formulario.
    *   **Resultado Esperado:** Deberías ser redirigido a la lista de usuarios (`/users`) y el nuevo usuario debería aparecer en la tabla.

4.  **Creación de un Nuevo Producto:**
    *   Ve a la ruta `/products/new`.
    *   Completa el formulario con datos de prueba para un nuevo producto.
    *   Envía el formulario.
    *   **Resultado Esperado:** Deberías ser redirigido a la lista de productos (`/products`) y el nuevo producto debería aparecer en la tabla.

5.  **Creación de un Nuevo Rol de Administrador:**
    *   Ve a la ruta `/admin/new`.
    *   Selecciona un `user_id` existente de la lista desplegable (o campo de entrada).
    *   Selecciona un rol del desplegable (por ejemplo, "Admin" o "Moderator").
    *   Envía el formulario.
    *   **Resultado Esperado:** Deberías ser redirigido a la lista de roles (`/admin`) y la nueva asignación de rol debería aparecer en la tabla.

## Solución de Problemas Comunes

A continuación, se listan algunos problemas comunes que podrías encontrar y sus posibles soluciones:

### Error NG8001: 'mat-option' (u otro componente de Material) no es un elemento conocido

*   **Problema:** Este error usualmente significa que un módulo específico de Angular Material no ha sido importado correctamente en tu `material.module.ts` (o en el módulo donde estás usando el componente). Por ejemplo, si `<mat-option>` no es reconocido, es probable que `MatSelectModule` o `MatAutocompleteModule` falten.
*   **Solución:**
    1.  Asegúrate de que el módulo correspondiente al componente (ej. `MatSelectModule` para `<mat-option>` dentro de un `mat-select`; `MatFormFieldModule` para `mat-form-field`; `MatInputModule` para `matInput`) esté importado en tu archivo `src/app/material.module.ts`.
    2.  Verifica que estos módulos también estén listados en el array `exports` de `MaterialModule`.

    Ejemplo de `material.module.ts` (asegúrate de que incluya todos los módulos que necesitas):
    ```typescript
    import { MatSelectModule } from '@angular/material/select';
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { MatInputModule } from '@angular/material/input';
    // Otros imports de Angular Material como MatButtonModule, MatCardModule, etc.
    import { MatButtonModule } from '@angular/material/button';
    import { MatCardModule } from '@angular/material/card';
    import { MatTableModule } from '@angular/material/table';
    import { MatSnackBarModule } from '@angular/material/snack-bar';
    import { MatToolbarModule } from '@angular/material/toolbar';

    @NgModule({
      exports: [
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatSnackBarModule,
        MatToolbarModule
        // ...otros módulos exportados
      ]
    })
    export class MaterialModule {}
    ```

### Error TS2307: No se puede encontrar el módulo '...' o sus correspondientes declaraciones de tipo

*   **Problema:** TypeScript no puede localizar un archivo o módulo que estás intentando importar. Esto puede deberse a una ruta incorrecta, un nombre de archivo mal escrito o un módulo que no está instalado.
*   **Solución:**
    1.  **Verifica las Rutas de Importación:**
        *   Asegúrate de que la ruta en la declaración `import` sea correcta en relación con la ubicación del archivo actual. Por ejemplo, para componentes, verifica las rutas en `app-routing.module.ts`:
            ```typescript
            import { TestComponent } from './components/test/test.component';
            import { ProductFormComponent } from './components/product/product-form/product-form.component';
            import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
            import { AdminFormComponent } from './components/admin/admin-form/admin-form.component';
            // ... y así sucesivamente para otros componentes.
            ```
        *   Para los modelos, si los importas en servicios o componentes, asegúrate de que la ruta sea correcta. Los modelos se encuentran en `src/app/models/`. Por ejemplo, en `api.service.ts`:
            ```typescript
            import { User } from '../models/user.model';
            import { Product } from '../models/product.model';
            import { Admin } from '../models/admin.model';
            ```
    2.  **Verifica la Existencia del Archivo:** Confirma que el archivo (`.ts`, `.html`, `.css`) realmente exista en la ruta especificada y que el nombre sea exacto (sensible a mayúsculas/minúsculas en algunos sistemas).
    3.  **Módulos No Instalados:** Si el error es sobre un paquete de `node_modules`, asegúrate de haber ejecutado `npm install`.

### Problemas con la API Backend

*   **Problema:** La aplicación frontend no puede obtener datos del backend, o las operaciones de creación/actualización fallan.
*   **Solución:**
    1.  **Verifica que la API esté Corriendo:** Asegúrate de que tu servidor de API Node.js esté iniciado y funcionando correctamente. Por lo general, debería estar escuchando en `http://localhost:3000`.
    2.  **Verifica la Configuración de `apiUrl`:** Abre `src/environments/environment.ts` (y `src/environments/environment.prod.ts` si aplica) y confirma que la propiedad `apiUrl` apunte a la URL base correcta de tu API. Por defecto, debería ser:
        ```typescript
        export const environment = {
          production: false,
          apiUrl: 'http://localhost:3000/api'
        };
        ```
    3.  **Revisa la Consola del Navegador y del Servidor:** Busca mensajes de error en la consola de desarrollador de tu navegador (pestaña "Network" o "Console") y en la terminal donde se ejecuta tu API Node.js.

### Errores de Compilación Generales

*   **Problema:** La aplicación no compila y `ng serve` muestra errores variados.
*   **Solución:**
    1.  **Limpia el Caché de Angular y Reinstala Dependencias:** A veces, el caché o las dependencias pueden corromperse. Ejecuta los siguientes comandos en la terminal, dentro del directorio del proyecto:
        ```bash
        ng cache clean
        rm -rf node_modules package-lock.json
        npm install
        ```
    2.  **Reinicia el Servidor de Desarrollo:** Después de limpiar y reinstalar, intenta iniciar el servidor nuevamente:
        ```bash
        ng serve --no-hmr
        ```
    3.  **Revisa los Mensajes de Error:** Lee cuidadosamente los mensajes de error proporcionados por el compilador de Angular. Usualmente indican el archivo y la línea donde se encuentra el problema.

## Notas Adicionales

Algunas consideraciones importantes para el desarrollo y la configuración del entorno:

*   **Versión de Node.js Recomendada:**
    Se ha observado que Node.js v22.15.0 puede presentar incompatibilidades con algunas herramientas de desarrollo (como la extensión Console Ninja). Para asegurar una mayor compatibilidad y estabilidad, **se recomienda utilizar Node.js v20.x**.
    Si tienes `nvm` (Node Version Manager) instalado, puedes cambiar a Node.js v20.x fácilmente:
    ```bash
    nvm install 20       # Instala la última versión disponible de Node.js 20.x
    nvm use 20           # Establece Node.js 20.x como la versión activa en tu sesión de terminal
    ```
    Después de cambiar la versión de Node.js, es una buena práctica reinstalar las dependencias del proyecto para asegurar que se construyan con la versión correcta de Node:
    ```bash
    npm install          # Reinstala las dependencias del proyecto
    ```

*   **Compatibilidad de Angular Material:**
    Este proyecto utiliza Angular v18.2.19. Es crucial que las versiones de `@angular/material` y `@angular/cdk` sean compatibles con esta versión de Angular.
    *   El archivo `package.json` especifica `@angular/material": "^18.2.14"` y `@angular/cdk": "^18.2.14"`. Estas son las versiones que deberías tener instaladas o que `npm install` debería resolver a una compatible.
    *   Si ejecutas `ng add @angular/material` (como se describe en la sección de instalación), Angular CLI generalmente se encarga de instalar una versión compatible.
    *   Si necesitas instalar o actualizar estas dependencias manualmente a una versión específica compatible, puedes usar la versión especificada en el `package.json` como referencia:
        ```bash
        npm install @angular/material@18.2.14 @angular/cdk@18.2.14
        ```
        (Ajusta el número de versión si se lanza un parche más reciente que sea compatible con Angular 18.2.x, o confía en la resolución de `npm install` basada en el `^` del `package.json`).

*   **Actualización Opcional a Angular 19:**
    Si en el futuro deseas actualizar tu proyecto a Angular 19 (cuando esté disponible y sea estable), puedes hacerlo utilizando el comando `ng update`. Ten en cuenta que esto es opcional y debes verificar la compatibilidad de tus dependencias.
    El comando para actualizar los paquetes principales de Angular sería:
    ```bash
    ng update @angular/core@19 @angular/cli@19 @angular/material@19 @angular/cdk@19
    ```
    Recuerda revisar la documentación oficial de Angular y Angular Material para guías de actualización detalladas antes de proceder.
```
