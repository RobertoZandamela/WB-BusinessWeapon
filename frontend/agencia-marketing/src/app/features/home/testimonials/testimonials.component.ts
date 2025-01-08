// src/app/features/home/testimonials/testimonials.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name: 'João Silva',
      role: 'CEO, Empresa ABC',
      quote: 'Resultados extraordinários! A equipe superou todas as nossas expectativas e entregou um projeto excepcional.',
      avatar: 'assets/avatars/avatar1.jpg'
    },
    {
      name: 'Maria Santos',
      role: 'Diretora de Marketing, XYZ Corp',
      quote: 'Profissionalismo e criatividade em cada etapa do projeto. Recomendo fortemente!',
      avatar: 'assets/avatars/avatar2.jpg'
    },
    {
      name: 'Pedro Costa',
      role: 'Gerente de Projetos, Tech Solutions',
      quote: 'Uma parceria que transformou completamente nossa presença digital. Excelente trabalho!',
      avatar: 'assets/avatars/avatar3.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {
    // Embaralhar os testimonials para mostrar diferentes ordens a cada carregamento
    this.testimonials = this.shuffleArray([...this.testimonials]);
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
