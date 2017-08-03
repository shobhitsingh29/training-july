import React from "react";
import {delay} from "redux-saga";
import {call, put, takeEvery, all, race} from "redux-saga/effects";
import * as actionTypes from "../constants/ActionTypes";

export function* helloSaga() {
    console.log("from  Saga");

}

export function* incrementAsync() {
    yield call(delay, 1000);
    yield put({
        type: actionTypes.INCREMENT_COUNTER
    })

}

function myApiCall() {
    return true;

}


function myApiCall1() {
    return new Promise(function (resolve) {
        setTimeout(resolve("32"), 5000)
    });
}

function myApiCall2() {

    return new Promise(function (resolve) {
        setTimeout(resolve("23"), 1000)
    });
}

export function* loadDatAsync() {

    /*    var x =  yield call(myApiCall);*/
   // var y = yield all([call(myApiCall1), call(myApiCall2)]);
    var {c,b} = yield all({c: call(myApiCall1),b:call(myApiCall2)});

    console.log(c,b);
    if (c) {
        yield put({type: actionTypes.LOAD_DATA_SUCCESS})
    }
    else {
        yield put({type: actionTypes.LOAD_DATA_FAILURE})
    }
}

export function* watchAsync() {
    yield takeEvery(actionTypes.LOAD_DATA, loadDatAsync)

}

export default function* rootSaga() {
    yield all([helloSaga, watchAsync()])
}



