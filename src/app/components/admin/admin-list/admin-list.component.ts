    import { Component, OnInit } from '@angular/core';
    import { ApiService } from '../../../services/api.service';
    import { ErrorHandlerService } from '../../../services/error-handler.service';
    import { Admin } from '../../../models/admin.model';

    @Component({
    selector: 'app-admin-list',
    templateUrl: './admin-list.component.html',
    styleUrls: ['./admin-list.component.css']
    })
    export class AdminListComponent implements OnInit {
    admins: Admin[] = [];
    displayedColumns: string[] = ['id', 'user_id', 'role', 'actions'];

    constructor(
        private apiService: ApiService,
        private errorHandler: ErrorHandlerService
    ) {}

    ngOnInit() {
        this.loadAdmins();
    }

    loadAdmins() {
        this.apiService.getAdmins().subscribe({
        next: (admins) => {
            this.admins = admins;
        },
        error: (error) => {
            this.errorHandler.showError(error.message);
        }
        });
    }

    deleteAdmin(id: number) {
        if (confirm('Are you sure you want to delete this admin role?')) {
        this.apiService.deleteAdmin(id).subscribe({
            next: () => {
            this.loadAdmins();
            this.errorHandler.showError('Admin role deleted successfully');
            },
            error: (error) => {
            this.errorHandler.showError(error.message);
            }
        });
        }
    }
    }