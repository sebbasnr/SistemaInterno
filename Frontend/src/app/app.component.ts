import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselModule, FormsModule, CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  passwordIcon: string = 'fas fa-eye-slash';
  submitted: boolean = false;

  constructor(private http: HttpClient) {}

  resetSubmission(): void {
    this.submitted = false;
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.passwordIcon = this.showPassword ? 'fas fa-eye' : 'fas fa-eye-slash';
    let passwordInput = document.getElementById('inputPassword') as HTMLInputElement;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  isValidEmail(): boolean {
    return this.email.endsWith('@cotecmar.com');
  }

  onSubmit(): void {
    this.submitted = true;
  
    if (this.isValidEmail()) {
      this.http.post('http://localhost:5000/login', { email: this.email, password: this.password })
        .subscribe({
          next: (response: any) => {
            console.log('Login exitoso', response);
            // Asegúrate de usar la clave correcta que coincide con tu backend
            console.log('Nombre completo:', response.full_name);
          },
          error: (error) => {
            console.error('Error en el login', error);
          }
        });
    } else {
      console.error('El correo debe tener dominio @cotecmar.com');
    }
  }
}
