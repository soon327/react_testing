import React from 'react';
import './App.css';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import TodoFilters from '@/components/TodoFilters';

export default function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
      <TodoFilters />
    </>
  );
}
