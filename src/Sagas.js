
// import { ,takeEvery } from "redux-saga";

import { take, put, call, takeEvery, fork } from 'redux-saga/effects'



function* dealAddAction(action) {
    console.log("action", action);
    const task = yield put({
        type: "Test"
    })
    console.log('task', task);
}

function* watchAddAction() {
    const action = yield takeEvery("TODO_TOGGLE", dealAddAction) 
}

function* helloWorld() {
    alert("hello Saga!");
}

function* rootSagas() {
    yield fork(watchAddAction);
    yield fork(helloWorld);
}

export default rootSagas;