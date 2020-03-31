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
      { label: 'Client', icon: 'pi pi-user', routerLink: ['/crud-customer'] },
      { label: 'Addresse', icon: 'pi pi-id-card', routerLink: ['/crud-address'] },
      { label: 'Livreur', icon: 'pi pi-shopping-cart', routerLink: ['/crud-carrier'] }
    ];
  }

}
