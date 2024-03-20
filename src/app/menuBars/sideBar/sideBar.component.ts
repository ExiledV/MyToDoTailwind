import { CommonModule } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core'

import { ButtonComponent } from '../../common/components/button/button.component'

@Component({
    selector: 'app-side-bar',
    standalone: true,
    imports: [CommonModule, ButtonComponent],
    templateUrl: './sideBar.component.html',
    styleUrl: './sideBar.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
    @Input() isMobileMenuOpen: boolean = false
    @Output() closeMenu = new EventEmitter<boolean>()

    sideBarUserNotes = [
        {
            title: 'Videojuegos',
            route: '',
        },
        {
            title: 'Libros',
            route: '',
        },
        {
            title: 'Pelis',
            route: '',
        },
        {
            title: 'Series',
            route: '',
        },
        {
            title: 'Dibujos',
            route: '',
        },
        {
            title: 'Programación',
            route: '',
        },
    ]

    constructor() {}

    ngOnInit() {}

    closeMobileMenu() {
        this.closeMenu.emit(false)
    }
}
