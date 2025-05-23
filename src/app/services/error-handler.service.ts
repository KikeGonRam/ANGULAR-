    import { Injectable } from '@angular/core';
    import { MatSnackBar } from '@angular/material/snack-bar';

    @Injectable({
    providedIn: 'root'
    })
    export class ErrorHandlerService {
    constructor(private snackBar: MatSnackBar) {}

    showError(message: string) {
        this.snackBar.open(message, 'Close', {
        duration: 5000,
        verticalPosition: 'top'
        });
    }
    }