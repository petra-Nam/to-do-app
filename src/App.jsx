import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";
import TodoList from "../components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TodoApp() {
  return (
    <MainWrapper>
      <TodoList/>
      <TodoList/>
      <TodoList/>

    </MainWrapper>
  );
}
