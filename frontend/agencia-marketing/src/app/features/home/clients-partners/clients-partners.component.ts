// src/app/features/home/clients-partners/clients-partners.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-clients-partners',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatDividerModule, 
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './clients-partners.component.html',
  styleUrls: ['./clients-partners.component.css'],
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('0.5s ease', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ClientsPartnersComponent implements OnInit {
  partners = [
    { 
      name: 'Microsoft', 
      logoUrl: 'assets/logos/microsoft.png',
      category: 'Tecnologia',
      description: 'Parceiro oficial Microsoft para soluções cloud.',
      website: 'https://microsoft.com'
    },
    { 
      name: 'Amazon AWS', 
      logoUrl: 'assets/logos/aws.png',
      category: 'Cloud Computing',
      description: 'Parceiro certificado AWS para infraestrutura.',
      website: 'https://aws.amazon.com'
    },
    { 
      name: 'Google Cloud', 
      logoUrl: 'assets/logos/google-cloud.png',
      category: 'Cloud Services',
      description: 'Especialista em soluções Google Cloud Platform.',
      website: 'https://cloud.google.com'
    },
    { 
      name: 'Oracle', 
      logoUrl: 'assets/logos/oracle.png',
      category: 'Database',
      description: 'Parceiro premium Oracle para banco de dados.',
      website: 'https://oracle.com'
    },
    { 
      name: 'IBM', 
      logoUrl: 'assets/logos/ibm.png',
      category: 'AI & Cloud',
      description: 'Parceiro estratégico em IA e computação em nuvem.',
      website: 'https://ibm.com'
    }
  ];

  filteredPartners = this.partners;
  categories: string[] = [];

  ngOnInit() {
    this.categories = [...new Set(this.partners.map(partner => partner.category))];
  }

  filterByCategory(category: string | null) {
    this.filteredPartners = category 
      ? this.partners.filter(partner => partner.category === category)
      : this.partners;
  }

  visitWebsite(url: string) {
    window.open(url, '_blank');
  }
}
