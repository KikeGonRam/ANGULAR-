    import { Component, OnInit } from '@angular/core';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    import { ActivatedRoute, Router } from '@angular/router';
    import { ApiService } from '../../../services/api.service';
    import { ErrorHandlerService } from '../../../services/error-handler.service';
    import { Product } from '../../../models/product.model';

    @Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
    })
    export class ProductFormComponent implements OnInit {
    productForm: FormGroup;
    isEdit: boolean = false;
    productId?: number;

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private errorHandler: ErrorHandlerService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.productForm = this.fb.group({
        name: ['', [Validators.required]],
        description: [''],
        price: [0, [Validators.required, Validators.min(0)]],
        stock: [0, [Validators.required, Validators.min(0)]]
        });
    }

    ngOnInit() {
        this.productId = Number(this.route.snapshot.paramMap.get('id'));
        this.isEdit = !!this.productId;
        if (this.isEdit) {
        this.apiService.getProduct(this.productId!).subscribe({
            next: (product) => {
            this.productForm.patchValue(product);
            },
            error: (error) => {
            this.errorHandler.showError(error.message);
            }
        });
        }
    }

    onSubmit() {
        if (this.productForm.valid) {
        const product: Product = this.productForm.value;
        if (this.isEdit) {
            this.apiService.updateProduct(this.productId!, product).subscribe({
            next: () => {
                this.errorHandler.showError('Product updated successfully');
                this.router.navigate(['/products']);
            },
            error: (error) => {
                this.errorHandler.showError(error.message);
            }
            });
        } else {
            this.apiService.createProduct(product).subscribe({
            next: () => {
                this.errorHandler.showError('Product created successfully');
                this.router.navigate(['/products']);
            },
            error: (error) => {
                this.errorHandler.showError(error.message);
            }
            });
        }
        }
    }
    }