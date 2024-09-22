import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { OrderDetails } from '../configuration/models/configuration';
import { computed } from '@angular/core';

type OrdersState = {
    orders: OrderDetails[];
    isLoading: boolean;
};

const initialState: OrdersState = {
    orders: [],
    isLoading: false,
};

export const OrdersStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ orders }) => ({
        ordersCount: computed(() => orders().length )
    })),
    withMethods((store) => ({

        addOrder(newOrder: OrderDetails) {
            patchState(store, ({ orders }) => ({ orders: [...orders, newOrder], isLoading: true }));
        }
    }))
);