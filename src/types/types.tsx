export interface IProduct {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

export interface IRating {
    rate: string;
    count: number;
}

// export enum actionTypes {
//     BASKET_ADD_ITEM = 'BASKET_ADD_ITEM',
//     BASKET_REMOVE_ITEM = 'BASKET_REMOVE_ITEM',
// }
//
// interface IBasketAddItemPayload {
//     product: IProduct;
// }
//
// interface IBasketAddItem {
//     type: actionTypes.BASKET_ADD_ITEM
//     payload: number
// }
//
// interface IBasketRemoveItem {
//     type: actionTypes.BASKET_REMOVE_ITEM
//     payload: IBasketAddItemPayload
// }
//
// export type TypeActionBasket = IBasketAddItem | IBasketRemoveItem