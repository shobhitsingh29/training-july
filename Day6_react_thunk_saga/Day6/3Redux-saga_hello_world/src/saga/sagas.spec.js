import test from 'tape';

import { put, call} from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './saga'

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync();

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'
    );

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT_COUNTER_ASYNC'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
    );
    assert.end()
});