import { Action } from '@ngrx/store';

export enum CartActionTypes{
    ADD_CAR = "ADD_CAR",
    REMOVE_CAR = "REMOVE_CAR"
}

export class AddCar implements Action{

    readonly type = CartActionTypes.ADD_CAR;

    constructor(
        public payload: any
    ){}
}

export class RemoveCar implements Action{
    readonly type = CartActionTypes.REMOVE_CAR;

    constructor(
        public payload: any
    ){}
}

export type CartActions = AddCar | RemoveCar;