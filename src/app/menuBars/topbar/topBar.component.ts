import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topBar.component.html',
  styleUrl: './topBar.component.css',
})
export class TopBarComponent {
  @Output() openMenu = new EventEmitter<boolean>();
  isMobileMenuOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleMobileMenuOpen() {
    this.openMenu.emit(true);
  }
}
