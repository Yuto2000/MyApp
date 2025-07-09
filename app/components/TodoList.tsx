import React, { FC } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Todo } from '../hooks/useTodoList';
import { TodoItem } from './TodoItem';

interface Props {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

/**
 * ToDo一覧表示用コンポーネント
 */
export const TodoList: FC<Props> = ({ todos, onToggle, onRemove }) => {
    const renderItem: ListRenderItem<Todo> = ({ item }) => (
        <TodoItem
            todo={item}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );

    return (
        <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
        />
    );
};