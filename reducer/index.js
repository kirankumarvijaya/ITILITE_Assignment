import {
    DEPARTURE_DATE,
    DEPARTURE_TIME,
    RETURN_DATE,
    RETURN_TIME,
} from '../actionTypes';

const INITIAL_STATE = {
    departureTime : '',
    departureDate : '',
    returnDate : '',
    returnTime : '',
};

export default ( prevState = INITIAL_STATE, action ) => {
    switch( action.type ){
        case DEPARTURE_DATE:{
            return {
                ...prevState,
                departureDate: action.date,
            };
        }
        case DEPARTURE_TIME:{
            return {
                ...prevState,
                departureTime: action.time,
            };
        }
        case RETURN_DATE: {
            return {
                ...prevState,
                returnDate: action.date,
            };
        }
        case RETURN_TIME: {
            return {
                ...prevState,
                returnTime: action.time,
            }
        }
        default: {
            return {
                ...INITIAL_STATE,
            };
        }
    };
};