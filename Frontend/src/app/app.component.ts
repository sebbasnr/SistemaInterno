import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselModule, FormsModule, CommonModule],
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
  resetSubmission(): void {
    this.submitted = false
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
    this.submitted = true; // Establece la bandera de envío a verdadero al intentar enviar el formulario

    if (!this.isValidEmail()) {
      // Aquí manejas el error de validación del correo
      console.error('El correo debe tener dominio @cotecmar.com');
      // Puedes mostrar un mensaje o manejar el error como lo necesites.
    }
    // Si el correo es válido, aquí continuarías con la lógica de envío
  }
}
