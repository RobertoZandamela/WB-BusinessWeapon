// src/app/features/home/success-stories/success-stories.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Project {
  name: string;
  description: string;
  metrics: string;
  icon: string;
  category: string;
  color: string;
}

@Component({
  selector: 'app-success-stories',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule
  ],
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent {
  projects: Project[] = [
    {
      name: 'E-commerce Premium',
      description: 'Implementação de sistema de e-commerce que resultou em um aumento significativo nas vendas online.',
      metrics: '200% em vendas',
      icon: 'shopping_cart',
      category: 'E-commerce',
      color: '#4caf50'
    },
    {
      name: 'Otimização de Processos',
      description: 'Otimização de processos internos que reduziu o tempo de processamento de pedidos.',
      metrics: '50% redução de tempo',
      icon: 'speed',
      category: 'Automação',
      color: '#2196f3'
    },
    {
      name: 'App Engagement',
      description: 'Desenvolvimento de app mobile que aumentou o engajamento dos usuários.',
      metrics: '300% mais usuários',
      icon: 'phone_android',
      category: 'Mobile',
      color: '#ff9800'
    }
  ];

  // Método para obter estilo do ícone baseado na cor do projeto
  getIconStyle(color: string): object {
    return {
      color: color,
      backgroundColor: `${color}15` // Adiciona transparência à cor de fundo
    };
  }
}
