/**
 * Created by kien.lovan on 10/23/2017.
 */

import {createStore} from 'redux';
import reducers from './reducers'
export default createStore(
    reducers,
    {}
)