    import { Component, OnInit } from '@angular/core';
    import { ApiService } from '../../../services/api.service';
    import { ErrorHandlerService } from '../../../services/error-handler.service';
    import { User } from '../../../models/user.model';

    @Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
    })
    export class UserListComponent implements OnInit {
    users: User[] = [];
    displayedColumns: string[] = ['id', 'username', 'email', 'actions'];

    constructor(
        private apiService: ApiService,
        private errorHandler: ErrorHandlerService
    ) {}

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers() {
        this.apiService.getUsers().subscribe({
        next: (users) => {
            this.users = users;
        },
        error: (error) => {
            this.errorHandler.showError(error.message);
        }
        });
    }

    deleteUser(id: number) {
        if (confirm('Are you sure you want to delete this user?')) {
        this.apiService.deleteUser(id).subscribe({
            next: () => {
            this.loadUsers();
            this.errorHandler.showError('User deleted successfully');
            },
            error: (error) => {
            this.errorHandler.showError(error.message);
            }
        });
        }
    }
    }