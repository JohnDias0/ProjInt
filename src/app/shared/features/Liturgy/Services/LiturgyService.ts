import { pastoralFactory } from "../../../../core/Factories/pastoral.factory";
import { Pastoral } from "../../../../core/models/Pastoral";

async function LiturgyService(dom: number, hor: number ){
    try {

    const Scale: Pastoral[][] = pastoralFactory.getInstances()
    const Liturgy: Pastoral = Scale[dom][hor]
    await sessionStorage.setItem('pastoral', Liturgy.getPastoral())
    console.log('Serviço de liturgia realizado com sucesso!')
    } catch (error) {
        console.log(`Erro no serviço de liturgia: ${error}`)
    }
}

export default LiturgyService