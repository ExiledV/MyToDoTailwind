import { CommonModule, KeyValue } from '@angular/common'
import { Component } from '@angular/core'
import { ButtonComponent } from '../../../common/components/button/button.component'
import { CardComponent } from '../../../common/components/card/card.component'
import { SelectComponent } from '../../../common/components/select/select.component'
import { TaskNotebook } from '../../interfaces/taskNotebook'

@Component({
    selector: 'app-task-summary',
    standalone: true,
    imports: [CommonModule, SelectComponent, ButtonComponent, CardComponent],
    templateUrl: './task-summary.component.html',
    styleUrl: './task-summary.component.css',
})
export class TaskSummaryComponent {
    favTasks: TaskNotebook[] = [
        {
            title: 'World of Warcraft',
            image: './assets/img/wow-portada.jpg',
            tasksDone: 5,
            totalTasks: 16,
            themes: ['Videojuegos', 'Dibujos'],
        },
        {
            title: 'Archivo de las tormentas',
            image: './assets/img/stormlight-portada.jpg',
            tasksDone: 2,
            totalTasks: 5,
            themes: ['Libros'],
        },
        {
            title: 'Spider-Gwen',
            image: './assets/img/spider-gwen-portada.webp',
            tasksDone: 1,
            totalTasks: 3,
            themes: ['Dibujos'],
        },
        {
            title: 'Animes',
            image: './assets/img/animes-portada.jpeg',
            tasksDone: 1,
            totalTasks: 40,
            themes: ['Series', 'Pelis'],
        },
        {
            title: 'Front-end Development',
            image: './assets/img/front-end-portada2.webp',
            tasksDone: 3,
            totalTasks: 5,
            themes: ['Programación', 'Dibujos'],
        },
        {
            title: 'Portfolio',
            image: './assets/img/linkedin-portada.webp',
            tasksDone: 0,
            totalTasks: 1,
            themes: ['Programación', 'Linkedin'],
        },
    ]
    selectOptions: KeyValue<string, any>[] = [
        { key: 'Todos', value: 'todos' },
        { key: 'Videojuegos', value: 'semana' },
        { key: 'Libros', value: 'mes' },
        { key: 'Pelis', value: 'semana' },
        { key: 'Series', value: 'mes' },
        { key: 'Dibujos', value: 'semana' },
        { key: 'Programacion', value: 'mes' },
    ]
}
