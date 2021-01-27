import { useDispatch, useSelector } from 'react-redux';
import increment from './actions/increment';
import decrement from './actions/decrement';
import signin from './actions/signin';
import signout from './actions/signout';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button style = {{margin : '5px'}} onClick = {() => {dispatch(increment())}}>+</button>
      <button style = {{margin : '5px'}} onClick = {() => {dispatch(decrement())}}>-</button>

      <h1>Is Logged: {isLogged.toString()}</h1>
      <button style = {{margin : '5px'}} onClick = {() => {dispatch(signin())}}>Sign In</button>
      <button style = {{margin : '5px'}} onClick = {() => {dispatch(signout())}}>Sign Out</button>
    </div>
  );
}

export default App;
