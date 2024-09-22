import { Color } from "../models/configuration";


export interface Engine {
    getEngineTypeName?(engineTypeName: string): void;
    engineTypeName?: string;
}

export class EngineTypeName implements Engine {
    engineTypeName: string = ''

    getEngineTypeName(engineTypeName: string): void {
        this.engineTypeName = engineTypeName
    }
}


export class BaseDecoratorService implements Engine {
    protected wrappee: Engine;

    constructor(wrappee: Engine) {
        this.wrappee = wrappee;
    }

    getEngineTypeName(engineTypeName: string): void {
        this.wrappee.getEngineTypeName?.(engineTypeName)
    }
}


export class CombustionEngineDecoratorService extends BaseDecoratorService {
    protected engineDisplacement: any[] = []
    protected numberOfCuttingLevels: any[] = []
    protected tankCapacity: any[] = []

    //  pojemność skokowa silnika spalinowego 
    getEngineDisplacement(): any[] {
        return this.engineDisplacement = [
            { value: '100 cm³', code: 100 },
            { value: '125 cm³', code: 125 },
            { value: '140 cm³', code: 140 },
            { value: '200 cm³', code: 200 }]
    }

    // pojemność baku dla silnika spalinowego
    getTankCapacity(): any[] {
        return this.tankCapacity = [
            { value: '0,5 litra', code: '500 ml' },
            { value: '0,6 litra', code: '600 ml' },
            { value: '0,7 litra', code: '700 ml' },
            { value: '0,8 litra', code: '800 ml' },
            { value: '0,9 litra', code: '900 ml' },
            { value: '1 litr', code: '1000 ml' }]
    }

    // liczba poziomów koszenia
    getNumberOfCuttingLevels(): any[] {
        return this.numberOfCuttingLevels = [
            { value: 5, code: 5 },
            { value: 6, code: 6 },
            { value: 7, code: 7 }]
    }

    override getEngineTypeName(engineTypeName: string) {
        super.getEngineTypeName(engineTypeName)
    }
}

export class ElectricDecoratorService extends BaseDecoratorService implements Color {
    protected cableLength: any[] = []
    protected numberOfBlades: any[] = []
    protected colors!: Color[]
    // długość kabla dla silnika elektrycznego
    getCableLength() {
        return this.cableLength = [
            { value: '10m', code: 10 },
            { value: '20m', code: 20 },
            { value: '30m', code: 30 }]
    }
    // ilość ostrzy 
    getNumberOfBlades() {
        return this.numberOfBlades = [
            { value: 1, code: 1 },
            { value: 2, code: 2 },
            { value: 3, code: 3 },
            { value: 4, code: 4 }]
    }
    override getEngineTypeName(engineTypeName: string) {
        super.getEngineTypeName(engineTypeName)
    }
    // kolor
    getColors(): Color[] {
        return this.colors = [
            { name: 'red', hexadecimalNotation: '#FF0000' },
            { name: 'blue', hexadecimalNotation: '#0000FF' },
            { name: 'green', hexadecimalNotation: '#008000' },
            { name: 'gold', hexadecimalNotation: '#FFD700' }
        ]
    }
}


export class BatteryOperatedDecoratorService extends BaseDecoratorService implements Color {
    protected colors: Color[] = []
    protected numberOfBatteries: any[] = []
    protected capacityOfOneBattery: any[] = []

    // ilość akumulatorów
    getNumberOfBatteries() {
        return this.numberOfBatteries = [
            { value: 1, code: 1 },
            { value: 2, code: 2 },
            { value: 3, code: 3 }]
    }

    // pojemoność jednego akulumatora
    getCapacityOfOneBattery() {
        return this.capacityOfOneBattery = [{ value: '2,0Ah', code: 2 },
        { value: '3,0Ah', code: 3 },
        { value: '4,0Ah', code: 4 }]
    }

    override getEngineTypeName(engineTypeName: string) {
        super.getEngineTypeName(engineTypeName)
    }

    getColors(): Color[] {
        return this.colors = [
            { name: 'red', hexadecimalNotation: '#FF0000' },
            { name: 'blue', hexadecimalNotation: '#0000FF' },
            { name: 'green', hexadecimalNotation: '#008000' },
            { name: 'gold', hexadecimalNotation: '#FFD700' }
        ]
    }
}