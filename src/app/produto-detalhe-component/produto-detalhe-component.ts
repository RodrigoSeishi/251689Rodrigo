import { Component } from '@angular/core';
import { Produto } from '../produto-component/produto-component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe-component',
  standalone: false,
  templateUrl: './produto-detalhe-component.html',
  styleUrl: './produto-detalhe-component.css',
})
export class ProdutoDetalheComponent {
  produtoId!: number;
  produto?: Produto;

  // Mock de dados para simular a busca pelo ID
  listaProdutos: Produto[] = [
    { id: 1, nome: 'Mouse Gamer RGB', preco: 150.00, descricao: 'Mouse óptico de alta precisão com sensor ajustável.', emEstoque: true },
    { id: 2, nome: 'Teclado Mecânico', preco: 350.00, descricao: 'Teclado switch azul com iluminação RGB individual.', emEstoque: true },
    { id: 3, nome: 'Monitor 144Hz', preco: 1200.00, descricao: 'Monitor Full HD 24 polegadas com taxa de atualização de 144Hz.', emEstoque: false },
    { id: 4, nome: 'Headset Surround 7.1', preco: 280.00, descricao: 'Headset confortável com microfone antirruído.', emEstoque: true }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obter o parâmetro ID da URL
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.produtoId = Number(idParam);
      this.produto = this.listaProdutos.find(p => p.id === this.produtoId);
    }
  }
}
