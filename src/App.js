import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Calculadora from './components/section1/CalculatorApp'
import ImcViewApp from './components/section2/ImcViewApp'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/consulta-imc" >Consulta</Link>
        <Link to="/resultados-imc" >Resultados</Link>
        <Switch>
          <Route path="/consulta-imc" exact component={Calculadora}></Route>
          <Route path="/resultados-imc" exact render={() => <ImcViewApp />} ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
