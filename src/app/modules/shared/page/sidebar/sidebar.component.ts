import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  abrirSidebar() {
    const sidebar = document.querySelector(".sd-sidebar");
    if (sidebar) {
      sidebar.classList.toggle("open");
    }
  }

}
