import { useRoutes, A } from "hookrouter";
import './App.css';
import routes from "./router";


// function App() {
//   const routeResult = useRoutes(routes);
//   return routeResult;
// }

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <A href="/user">Users Page</A> <br />
      <A href="/about">About Page</A>
      <br />
      <A href="/contact">Contacts Page</A>
      {routeResult}
    </div>
  );
}

export default App;
