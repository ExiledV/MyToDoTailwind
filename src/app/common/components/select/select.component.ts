import { CommonModule, KeyValue } from '@angular/common'
import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from '@angular/core'

@Component({
    selector: 'app-select',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './select.component.html',
    styleUrl: './select.component.css',
})
export class SelectComponent {
    open: boolean = false
    @Output() valueEmitter = new EventEmitter()

    @Input() values: KeyValue<string, any>[] = []
    @Input() label?: string
    @Input() size?: string

    //only where size is null
    maxWidth = 0

    selectedKey: string = ''
    selectedValue: any

    constructor() {}

    @HostListener('document:click', ['$event'])
    clickout(event: MouseEvent) {
        if (!this.isClickInside(event)) {
            this.open = false
        }
    }

    private isClickInside(event: MouseEvent): boolean {
        return !!document
            .querySelector('app-select')
            ?.contains(event.target as Node)
    }

    ngOnInit() {
        if (this.values.length > 0) {
            this.selectedKey = this.values[0].key
            this.selectedValue = this.values[0].value

            if (!this.size) {
                for (let value of this.values) {
                    if (value.key.length > this.maxWidth) {
                        this.maxWidth = value.key.length
                    }
                }
                this.maxWidth += 3
            }
        }
    }

    toggle() {
        this.open = !this.open
    }

    setValue(key: string, value: any) {
        this.selectedKey = key
        this.selectedValue = value
        this.valueEmitter.emit(this.selectedValue)
        this.open = false
    }
}
