// src/app/features/home/featured-services/featured-services.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-featured-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class FeaturedServicesComponent {
  services = [
    {
      title: 'Gestão de Redes Sociais',
      description: 'Estratégias de conteúdo e engajamento para ampliar o alcance da sua marca.',
      link: '/services/social-media',
      icon: 'share'
    },
    {
      title: 'Criação de Websites',
      description: 'Sites modernos e funcionais que convertem visitantes em clientes.',
      link: '/services/web-development',
      icon: 'computer'
    },
    {
      title: 'Publicidade Online',
      description: 'Campanhas de alta conversão e direcionadas para o público certo.',
      link: '/services/online-advertising',
      icon: 'campaign'
    },
    {
      title: 'SEO',
      description: 'Posicione-se no topo das buscas e atraia mais visitantes qualificados.',
      link: '/services/seo',
      icon: 'trending_up'
    },
    {
      title: 'Criação de Lojas Virtuais',
      description: 'Estruturas completas de e-commerce para expandir o alcance e as vendas do seu negócio.',
      link: '/services/e-commerce',
      icon: 'shopping_cart'
    },
    {
      title: 'Email Corporativo',
      description: 'Soluções profissionais de email com seu domínio próprio e configuração completa do Outlook para sua equipe.',
      link: '/services/corporate-email',
      icon: 'mail'
    }
  ];
}
