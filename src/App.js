import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import Footer from './components/footer';
import TodoList from './components/TodoList';
import { fetchTodos } from './redux/todosReducer';
import "./api/server"

store.dispatch(fetchTodos)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </Provider>
    </div>
  );
}

export default App;
