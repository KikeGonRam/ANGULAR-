    import { Component, OnInit } from '@angular/core';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    import { ActivatedRoute, Router } from '@angular/router';
    import { ApiService } from '../../../services/api.service';
    import { ErrorHandlerService } from '../../../services/error-handler.service';
    import { Admin } from '../../../models/admin.model';

    @Component({
    selector: 'app-admin-form',
    templateUrl: './admin-form.component.html',
    styleUrls: ['./admin-form.component.css']
    })
    export class AdminFormComponent implements OnInit {
    adminForm: FormGroup;
    isEdit: boolean = false;
    adminId?: number;

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private errorHandler: ErrorHandlerService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.adminForm = this.fb.group({
        user_id: ['', [Validators.required]],
        role: ['', [Validators.required]]
        });
    }

    ngOnInit() {
        this.adminId = Number(this.route.snapshot.paramMap.get('id'));
        this.isEdit = !!this.adminId;
        if (this.isEdit) {
        this.apiService.getAdmin(this.adminId!).subscribe({
            next: (admin) => {
            this.adminForm.patchValue(admin);
            },
            error: (error) => {
            this.errorHandler.showError(error.message);
            }
        });
        }
    }

    onSubmit() {
        if (this.adminForm.valid) {
        const admin: Admin = this.adminForm.value;
        if (this.isEdit) {
            this.apiService.updateAdmin(this.adminId!, admin).subscribe({
            next: () => {
                this.errorHandler.showError('Admin role updated successfully');
                this.router.navigate(['/admin']);
            },
            error: (error) => {
                this.errorHandler.showError(error.message);
            }
            });
        } else {
            this.apiService.createAdmin(admin).subscribe({
            next: () => {
                this.errorHandler.showError('Admin role created successfully');
                this.router.navigate(['/admin']);
            },
            error: (error) => {
                this.errorHandler.showError(error.message);
            }
            });
        }
        }
    }
    }