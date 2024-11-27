import { Component } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { PrimengMaterialModule } from './primeng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    AngularMaterialModule,
    PrimengMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'Gerador de Senha';
  password: string | undefined;
  loading: boolean = false;
  specialCharacters: boolean = false;
  capitalLetters: boolean = false;
  lowercaseLetters: boolean = false;
  numbers: boolean = false;
  value: number = 8;

  generatePassword() {
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";
    const capitalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';

    let charSet = '';

    if (this.specialCharacters) charSet += specialChars;
    if (this.capitalLetters) charSet += capitalChars;
    if (this.lowercaseLetters) charSet += lowerChars;
    if (this.numbers) charSet += numberChars;

    if (!charSet) {
      alert('Selecione ao menos uma opção');
      return;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.value; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    this.password = generatedPassword;
  }

  copyPassword() {
    if (this.password) {
      navigator.clipboard
        .writeText(this.password)
        .then(() => {
          console.log('Senha copiada para a área de transferência!');
        })
        .catch((err) => {
          console.error('Erro ao copiar a senha: ', err);
        });
    }
  }
}
