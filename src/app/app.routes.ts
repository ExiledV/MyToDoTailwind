import { Routes } from '@angular/router'
import { TaskSummaryComponent } from './task/pages/task-summary/task-summary.component'
import { TaskComponent } from './task/pages/task/task.component'

export const routes: Routes = [
    { path: '', redirectTo: '/summary', pathMatch: 'full' },
    { path: 'summary', component: TaskSummaryComponent },
    { path: 'task', component: TaskComponent },
]
