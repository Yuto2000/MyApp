import { useCallback, useState } from 'react';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

/**
 * ToDoリストの状態管理と操作をまとめたカスタムフック
 */
export function useTodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = useCallback((title: string) => {
        if (!title.trim()) return;
        const newTodo: Todo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos(prev => [newTodo, ...prev]);
    }, []);

    const toggleTodo = useCallback((id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }, []);

    const removeTodo = useCallback((id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []);

    return { todos, addTodo, toggleTodo, removeTodo };
}