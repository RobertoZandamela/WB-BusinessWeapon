// src/app/features/home/blog-articles/blog-articles.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-blog-articles',
  standalone: true,
  imports: [
    RouterLink, 
    NgFor, 
    MatCardModule, 
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.css']
})
export class BlogArticlesComponent {
  articles = [
    {
      title: 'Tendências de Marketing Digital para 2024',
      excerpt: 'Descubra as principais tendências que vão transformar o marketing digital em 2024 e como sua empresa pode se adaptar.',
      imageUrl: 'assets/images/blog-marketing-2024.jpg',
      link: '/blog/tendencias-marketing-2024'
    },
    {
      title: 'SEO Avançado: Dicas para Melhorar seu Ranking',
      excerpt: 'Aprenda técnicas avançadas de SEO para melhorar o posicionamento da sua empresa nos motores de busca.',
      imageUrl: 'assets/images/blog-seo.jpg',
      link: '/blog/seo-avancado'
    },
    {
      title: 'Gestão de Redes Sociais: Estratégias de Engajamento',
      excerpt: 'Veja como estratégias eficazes de redes sociais podem ampliar o alcance e engajamento da sua marca.',
      imageUrl: 'assets/images/blog-social-media.jpg',
      link: '/blog/gestao-redes-sociais'
    }
  ];
}
