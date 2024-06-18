class Pastoral{
    private schedule: number;
    private pastoral: string;
    private oldSchedule!: number;
    constructor(schedule: number, pastoral:string){
        this.pastoral = pastoral
        this.schedule = schedule
    }

    getSchedule(){
        return this.schedule
    }
    getPastoral(){
        return this.pastoral
    }
    setSchedule(newSchedule: number){
        this.oldSchedule = this.schedule,
        this.schedule = newSchedule
    }
    getoldSchedule(){
        if(this.oldSchedule !== undefined){
            return this.oldSchedule
        }
        return this.schedule
    }
}

export {Pastoral}