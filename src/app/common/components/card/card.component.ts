import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() imageSrc?: string
    @Input() title: string = ''
    @Input() subtitle?: string
    @Input() tasksDone: number = 0
    @Input() totalTasks: number = 0
    @Input() themes?: string[]

    constructor() {}

    ngOnInit() {}
}
