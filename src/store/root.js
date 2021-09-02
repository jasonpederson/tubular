import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';

const epics = combineEpics(

);

const rootEpic = (action$, store$, dependencies) =>
  epics(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.error(error);
    return source;
  })
);

const rootReducer = combineReducers({

});

export { rootEpic, rootReducer }