import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootRaga() {
  return yield all([cart]);
}
