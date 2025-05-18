    import { Component, OnInit } from '@angular/core';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    import { ActivatedRoute, Router } from '@angular/router';
    import { ApiService } from '../../../services/api.service';
    import { ErrorHandlerService } from '../../../services/error-handler.service';
    import { User } from '../../../models/user.model';

    @Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
    })
    export class UserFormComponent implements OnInit {
    userForm: FormGroup;
    isEdit: boolean = false;
    userId?: number;

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private errorHandler: ErrorHandlerService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.userForm = this.fb.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', []]
        });
    }

    ngOnInit() {
        this.userId = Number(this.route.snapshot.paramMap.get('id'));
        this.isEdit = !!this.userId;
        if (this.isEdit) {
        this.apiService.getUser(this.userId!).subscribe({
            next: (user) => {
            this.userForm.patchValue(user);
            this.userForm.get('password')?.clearValidators();
            this.userForm.get('password')?.updateValueAndValidity();
            },
            error: (error) => {
            this.errorHandler.showError(error.message);
            }
        });
        } else {
        this.userForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);
        this.userForm.get('password')?.updateValueAndValidity();
        }
    }

    onSubmit() {
        if (this.userForm.valid) {
        const user: User = this.userForm.value;
        if (this.isEdit) {
            this.apiService.updateUser(this.userId!, user).subscribe({
            next: () => {
                this.errorHandler.showError('User updated successfully');
                this.router.navigate(['/users']);
            },
            error: (error) => {
                this.errorHandler.showError(error.message);
            }
            });
        } else {
            this.apiService.createUser(user).subscribe({
            next: () => {
                this.errorHandler.showError('User created successfully');
                this.router.navigate(['/users']);
            },
            error: (error) => {
                this.errorHandler.showError(error.message);
            }
            });
        }
        }
    }
    }