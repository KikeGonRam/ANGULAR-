    import { Component, OnInit } from '@angular/core';
    import { ApiService } from '../../services/api.service';
    import { ErrorHandlerService } from '../../services/error-handler.service';

    @Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
    })
    export class TestComponent implements OnInit {
    message: string = '';

    constructor(
        private apiService: ApiService,
        private errorHandler: ErrorHandlerService
    ) {}

    ngOnInit() {
        this.apiService.getTestMessage().subscribe({
        next: (response) => {
            this.message = response.message;
        },
        error: (error) => {
            this.errorHandler.showError(error.message);
        }
        });
    }
    }