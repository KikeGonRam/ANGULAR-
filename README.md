## Aplicación Angular de Gestión Basico 
Descripción
Esta aplicación frontend está construida con Angular 18.2.19 y Angular Material. Proporciona una interfaz para interactuar con una API Node.js, permitiendo gestionar usuarios, productos y roles de administrador. Incluye un componente de prueba que muestra "Hola Mundo" desde el endpoint /api/test.
Tecnologías

Angular: v18.2.19
Angular Material: v18.2.5
TypeScript: ~5.5.4
Node.js: v20.x (recomendado, aunque se reportó uso de v22.15.0)
RxJS: Para manejar peticiones HTTP
Angular CLI: Para desarrollo y compilación

Estructura del proyecto
angular-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── test/
│   │   │   │   ├── test.component.ts
│   │   │   │   ├── test.component.html
│   │   │   │   ├── test.component.css
│   │   │   ├── user/
│   │   │   │   ├── user-list/
│   │   │   │   ├── user-form/
│   │   │   │   ├── user.model.ts
│   │   │   ├── product/
│   │   │   │   ├── product-list/
│   │   │   │   ├── product-form/
│   │   │   │   ├── product.model.ts
│   │   │   ├── admin/
│   │   │   │   ├── admin-list/
│   │   │   │   ├── admin-form/
│   │   │   │   ├── admin.model.ts
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   │   ├── error-handler.service.ts
│   │   ├── material.module.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   ├── environments/
│   │   ├── environment.ts
├── package.json

## Instalación

Clona el repositorio (si aplica):
git clone <repositorio>
cd angular-app


Instala las dependencias:
npm install


Configura las variables de entorno:Verifica src/environments/environment.ts:
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};

Asegúrate de que apiUrl apunte a la API Node.js.

Configura Angular Material:Si no está instalado, ejecuta:
ng add @angular/material


Elige un tema (por ejemplo, Indigo/Pink).
Habilita las animaciones.



Ejecución

Inicia la aplicación:
ng serve --no-hmr


Usa --no-hmr para evitar problemas con Hot Module Replacement.
La aplicación corre en http://localhost:4200.


## Verifica el componente de prueba:

Abre http://localhost:4200/ (redirige a /test) o http://localhost:4200/test.
Deberías ver "Hola Mundo" desde el endpoint /api/test.



Rutas

Base URL: http://localhost:4200
Test:
/ (redirige a /test)
/test: Muestra "Hola Mundo" (TestComponent)


Usuarios:
/users: Lista de usuarios (UserListComponent)
/users/new: Crear usuario (UserFormComponent)
/users/edit/:id: Editar usuario (UserFormComponent)


Productos:
/products: Lista de productos (ProductListComponent)
/products/new: Crear producto (ProductFormComponent)
/products/edit/:id: Editar producto (ProductFormComponent)


Administradores:
/admin: Lista de roles de administrador (AdminListComponent)
/admin/new: Crear rol (AdminFormComponent)
/admin/edit/:id: Editar rol (AdminFormComponent)



Componentes principales

TestComponent: Muestra el mensaje de prueba desde /api/test.
UserListComponent: Tabla de usuarios con opciones para editar/eliminar.
UserFormComponent: Formulario para crear/editar usuarios.
ProductListComponent: Tabla de productos.
ProductFormComponent: Formulario para crear/editar productos.
AdminListComponent: Tabla de roles de administrador.
AdminFormComponent: Formulario para crear/editar roles, usa <mat-select> con opciones "Admin" y "Moderator".

Servicios

ApiService: Maneja peticiones HTTP a la API.
ErrorHandlerService: Muestra mensajes de error/success con MatSnackBar.

Modelos

User:export interface User {
  id?: number;
  username: string;
  email: string;
  password?: string;
  created_at?: string;
}


Product:export interface Product {
  id?: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  created_at?: string;
}


Admin:export interface Admin {
  id?: number;
  user_id: number;
  role: string;
  created_at?: string;
}



Pruebas

Accede a http://localhost:4200/test:
Verifica que se muestre "Hola Mundo".


Navega a /users, /products, /admin:
Confirma que las listas se carguen.


Crea un usuario:
Ve a /users/new, llena el formulario y verifica la lista.


Crea un producto:
Ve a /products/new, llena el formulario y verifica.


Crea un rol de administrador:
Ve a /admin/new, selecciona un user_id y un rol ("Admin" o "Moderator"), y verifica.



Solución de problemas

Error NG8001: 'mat-option' is not a known element:
Asegúrate de que MatSelectModule, MatFormFieldModule, y MatInputModule estén en material.module.ts:import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
  ]
})
export class MaterialModule {}




Error TS2307: Cannot find module:
Verifica que los componentes existan en las rutas correctas (por ejemplo, src/app/components/test/test.component.ts).
Corrige las importaciones en app-routing.module.ts:import { TestComponent } from './components/test/test.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { AdminFormComponent } from './components/admin/admin-form/admin-form.component';


Corrige las importaciones en api.service.ts:import { User } from '../components/user/user.model';
import { Product } from '../components/product/product.model';
import { Admin } from '../components/admin/admin.model';




Problemas con la API:
Asegúrate de que la API esté corriendo en http://localhost:3000.
Verifica environment.ts:apiUrl: 'http://localhost:3000/api'




Errores de compilación:
Limpia el caché y recompila:ng cache clean
rm -rf node_modules package-lock.json
npm install
ng serve --no-hmr





Notas

Node.js 22.15.0: No soportado por algunas herramientas (como Console Ninja). Usa Node 20.x:nvm install 20
nvm use 20
npm install


Angular Material: Asegúrate de que las versiones de @angular/material y @angular/cdk sean compatibles con Angular 18.2.19:npm install @angular/material@18.2.5 @angular/cdk@18.2.5


Actualización a Angular 19:
Si prefieres Angular 19, ejecuta:ng update @angular/core@19 @angular/cli@19 @angular/material@19 @angular/cdk@19





