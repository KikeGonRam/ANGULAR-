    import { Component, OnInit } from '@angular/core';
    import { ApiService } from '../../../services/api.service';
    import { ErrorHandlerService } from '../../../services/error-handler.service';
    import { Product } from '../../../models/product.model';

    @Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
    })
    export class ProductListComponent implements OnInit {
    products: Product[] = [];
    displayedColumns: string[] = ['id', 'name', 'price', 'stock', 'actions'];

    constructor(
        private apiService: ApiService,
        private errorHandler: ErrorHandlerService
    ) {}

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.apiService.getProducts().subscribe({
        next: (products) => {
            this.products = products;
        },
        error: (error) => {
            this.errorHandler.showError(error.message);
        }
        });
    }

    deleteProduct(id: number) {
        if (confirm('Are you sure you want to delete this product?')) {
        this.apiService.deleteProduct(id).subscribe({
            next: () => {
            this.loadProducts();
            this.errorHandler.showError('Product deleted successfully');
            },
            error: (error) => {
            this.errorHandler.showError(error.message);
            }
        });
        }
    }
    }