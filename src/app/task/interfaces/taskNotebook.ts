export class TaskNotebook {
    title: string
    image: string
    tasksDone: number
    totalTasks: number
    themes: string[]

    constructor(
        title: string,
        image: string,
        tasksDone: number,
        totalTasks: number,
        themes: string[]
    ) {
        this.title = title
        this.image = image
        this.tasksDone = tasksDone
        this.totalTasks = totalTasks
        this.themes = themes
    }
}
