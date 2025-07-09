import React from 'react';
import { Container } from './styles/globalStyle';
import { useTodoList } from './hooks/useTodoList';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

/**
 * アプリのエントリーポイント
 * UIとビジネスロジックを明確に分離
 */
export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoList();

  return (
    <Container>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onRemove={removeTodo}
      />
    </Container>
  );
}