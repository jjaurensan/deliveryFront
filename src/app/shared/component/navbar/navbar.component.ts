import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'Livraison', icon: 'pi pi-refresh',
        items: [
          { label: 'Ajouter', icon: 'pi pi-plus-circle', routerLink: ['/delivery-form'] },
          { label: 'Consulter', icon: 'pi pi-search' },
          { label: 'Modifier', icon: 'pi pi-pencil' },
          { label: 'Supprimer', icon: 'pi pi-trash' }
        ]
      },
      {
        label: 'Client', icon: 'pi pi-user',
        items: [
          { label: 'Ajouter', icon: 'pi pi-user-plus' },
          { label: 'Consulter', icon: 'pi pi-users', routerLink: ['/customers'] },
          { label: 'Modifier', icon: 'pi pi-user-edit' },
          { label: 'Supprimer', icon: 'pi pi-user-minus' }
        ]
      },
      {
        label: 'Livreur', icon: 'pi pi-shopping-cart',
        items: [
          { label: 'Ajouter', icon: 'pi pi-plus-circle', routerLink: ['/carrier'] },
          { label: 'Consulter', icon: 'pi pi-search' , routerLink: ['/list-carrier']},
          { label: 'Modifier', icon: 'pi pi-pencil' , routerLink: ['/update-carrier']},
          { label: 'Supprimer', icon: 'pi pi-trash', routerLink:['/crud-carrier'] }
        ]
      }
    ];
  }

}
