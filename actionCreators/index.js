import {
    DEPARTURE_DATE,
    DEPARTURE_TIME,
    RETURN_DATE,
    RETURN_TIME
} from '../actionTypes';

export function storeDepartureDate( date ){
    return {
        type: DEPARTURE_DATE,
        date,
    };
};

export function storeDeparturnTime( time ){
    return {
        type: DEPARTURE_TIME,
        time,
    };
};

export function storeReturnDate( date ){
    return {
        type: RETURN_DATE,
        date,
    };
};

export function storeReturnTime( time ){
    return {
        type: RETURN_TIME,
        time,
    };
};