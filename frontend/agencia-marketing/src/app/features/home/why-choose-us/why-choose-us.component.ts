// src/app/features/home/why-choose-us/why-choose-us.component.ts
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class WhyChooseUsComponent {
  features = [
    {
      icon: 'rocket_launch',
      title: 'Inovação Constante',
      description: 'Nossa equipe está sempre na vanguarda das tecnologias e tendências de marketing digital.'
    },
    {
      icon: 'insights',
      title: 'Resultados Mensuráveis',
      description: 'Apresentamos dados e relatórios claros para que você acompanhe o impacto das nossas estratégias.'
    },
    {
      icon: 'diversity_3',
      title: 'Atendimento Personalizado',
      description: 'Trabalhamos lado a lado com nossos clientes para garantir que cada estratégia se alinhe aos seus objetivos específicos.'
    },
    {
      icon: 'psychology_alt',
      title: 'Expertise Comprovada',
      description: 'Anos de experiência em marketing digital e um histórico comprovado de sucesso com diversos clientes.'
    }
  ];
}
