    import { Injectable } from '@angular/core';
    import { HttpClient, HttpErrorResponse } from '@angular/common/http';
    import { Observable, throwError } from 'rxjs';
    import { catchError } from 'rxjs/operators';
    import { environment } from '../../environments/environment';
    import { User } from '../models/user.model';
    import { Product } from '../models/product.model';
    import { Admin } from '../models/admin.model';
    
    @Injectable({
    providedIn: 'root'
    })
    export class ApiService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    // Test endpoint
    getTestMessage(): Observable<any> {
        return this.http.get(`${this.apiUrl}/test`).pipe(
        catchError(this.handleError)
        );
    }

    // User endpoints
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
        catchError(this.handleError)
        );
    }

    getUser(id: number): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/users/${id}`).pipe(
        catchError(this.handleError)
        );
    }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/users`, user).pipe(
        catchError(this.handleError)
        );
    }

    updateUser(id: number, user: User): Observable<any> {
        return this.http.put(`${this.apiUrl}/users/${id}`, user).pipe(
        catchError(this.handleError)
        );
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/users/${id}`).pipe(
        catchError(this.handleError)
        );
    }

    // Product endpoints
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiUrl}/products`).pipe(
        catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/products/${id}`).pipe(
        catchError(this.handleError)
        );
    }

    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.apiUrl}/products`, product).pipe(
        catchError(this.handleError)
        );
    }

    updateProduct(id: number, product: Product): Observable<any> {
        return this.http.put(`${this.apiUrl}/products/${id}`, product).pipe(
        catchError(this.handleError)
        );
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/products/${id}`).pipe(
        catchError(this.handleError)
        );
    }

    // Admin endpoints
    getAdmins(): Observable<Admin[]> {
        return this.http.get<Admin[]>(`${this.apiUrl}/admin`).pipe(
        catchError(this.handleError)
        );
    }

    getAdmin(id: number): Observable<Admin> {
        return this.http.get<Admin>(`${this.apiUrl}/admin/${id}`).pipe(
        catchError(this.handleError)
        );
    }

    createAdmin(admin: Admin): Observable<Admin> {
        return this.http.post<Admin>(`${this.apiUrl}/admin`, admin).pipe(
        catchError(this.handleError)
        );
    }

    updateAdmin(id: number, admin: Admin): Observable<any> {
        return this.http.put(`${this.apiUrl}/admin/${id}`, admin).pipe(
        catchError(this.handleError)
        );
    }

    deleteAdmin(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/admin/${id}`).pipe(
        catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
        errorMessage = `Client-side error: ${error.error.message}`;
        } else {
        errorMessage = `Server-side error: ${error.status} - ${error.message}`;
        if (error.error.errors) {
            errorMessage += ` - ${JSON.stringify(error.error.errors)}`;
        }
        }
        return throwError(() => new Error(errorMessage));
    }
    }