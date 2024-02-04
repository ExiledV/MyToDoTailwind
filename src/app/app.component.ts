import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { SideBarComponent } from './menuBars/sideBar/sideBar.component';
import { TopBarComponent } from './menuBars/topbar/topBar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MyToDoTailwind';
  isMobileMenuOpen = false;
}
