import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

type buttonTypes =
    | 'basic'
    | 'primary'
    | 'secondary'
    | 'flat'
    | 'accent'
    | 'warn'
    | 'disabled'
@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
})
export class ButtonComponent {
    @Input() text?: string
    @Input() type: buttonTypes = 'basic'
    @Input() icon?: string = undefined

    tailwindClass: string = ''
    logoFilter?: string

    /** 
    .filter-white {
        filter: invert(100%) sepia(5%) saturate(7481%) hue-rotate(219deg)
            brightness(110%) contrast(104%);
    }

    .filter-red-700 {
        filter: invert(18%) sepia(51%) saturate(2904%) hue-rotate(340deg)
            brightness(116%) contrast(109%);
    }

    */

    constructor() {}

    ngOnInit() {
        this.setButtonStyle()
    }

    setButtonStyle() {
        switch (this.type) {
            case 'basic':
                this.tailwindClass =
                    'text-black shadow-md hover:bg-gray-200 active:bg-gray-400 dark:text-white dark:hover:bg-gray-500'
                break
            case 'primary':
                this.tailwindClass =
                    'text-white shadow-md bg-red-700 hover:bg-red-800 active:bg-red-900 dark:bg-red-400 hover:bg-red-500 active:bg-red-600'
                this.logoFilter = 'filter-primary'
                break
            case 'secondary':
                this.tailwindClass =
                    'text-red-800 shadow-md hover:bg-red-700 hover:text-white active:bg-red-900 dark:text-white dark:shadow-sm dark:shadow-white'
                this.logoFilter = 'filter-secundary'
                break
            case 'flat':
                this.tailwindClass =
                    'text-black hover:bg-gray-200 active:bg-gray-300 dark:text-white dark:hover:bg-gray-400'
        }
    }
}
