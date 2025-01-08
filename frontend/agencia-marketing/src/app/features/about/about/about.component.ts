import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent {
  values = [
    {
      icon: 'lightbulb',
      title: 'Inova��ão',
      description: 'Estar na linha da frente das tendências digitais é essencial. A nossa equipa está constantemente a explorar novas ideias, ferramentas e estratégias.'
    },
    {
      icon: 'handshake',
      title: 'Compromisso com o Cliente',
      description: 'Colocamos as necessidades dos nossos clientes em primeiro lugar. Trabalhamos lado a lado com as empresas para entender os seus desafios.'
    },
    {
      icon: 'trending_up',
      title: 'Resultados',
      description: 'Não basta criar estratégias—temos de ver resultados. O nosso foco é garantir ROI em cada ação de marketing digital.'
    },
    {
      icon: 'visibility',
      title: 'Transparência',
      description: 'Acreditamos em uma comunicação aberta e honesta com os nossos clientes, mantendo-os sempre informados.'
    },
    {
      icon: 'school',
      title: 'Crescimento Contínuo',
      description: 'Acreditamos no crescimento—não só para os nossos clientes, mas também para nós, através da formação contínua.'
    }
  ];

  team = [
    {
      role: 'Estrategistas de Redes Sociais',
      icon: 'share',
      description: 'Especialistas em criar e gerenciar presenças impactantes nas redes sociais'
    },
    {
      role: 'Designers Criativos',
      icon: 'palette',
      description: 'Profissionais talentosos que dão vida às suas ideias com designs únicos'
    },
    {
      role: 'Desenvolvedores Web',
      icon: 'code',
      description: 'Experts em criar soluções web modernas e funcionais'
    },
    {
      role: 'Especialistas SEO',
      icon: 'search',
      description: 'Mestres em otimização para motores de busca'
    }
  ];
}
