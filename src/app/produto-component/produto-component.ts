import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produto-component',
  standalone: false,
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css',
})
export class ProdutoComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Mouse Gamer RGB', preco: 150.00, descricao: 'Mouse óptico de alta precisão.', emEstoque: true },
    { id: 2, nome: 'Teclado Mecânico', preco: 350.00, descricao: 'Teclado switch azul com iluminação.', emEstoque: true },
    { id: 3, nome: 'Monitor 144Hz', preco: 1200.00, descricao: 'Monitor Full HD para jogos.', emEstoque: false },
    { id: 4, nome: 'Headset Surround 7.1', preco: 280.00, descricao: 'Headset confortavel com isolamento acústico.', emEstoque: true }
  ];

  constructor(private router: Router) {}

  comprar(id: number): void {
    this.router.navigate(['/produto-detalhe', id]);
  }
}
