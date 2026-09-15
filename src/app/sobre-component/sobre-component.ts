import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-component',
  standalone: false,
  templateUrl: './sobre-component.html',
  styleUrl: './sobre-component.css',
})
export class SobreComponent {
  nomeAluno: string = 'Rodrigo Seishi Suzuki Kitazono';
  raAluno: string = '251689';
}
