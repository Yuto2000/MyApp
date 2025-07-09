import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Todo } from '../hooks/useTodoList';

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

/**
 * 単一のToDo表示コンポーネント
 */
export const TodoItem: FC<Props> = ({ todo, onToggle, onRemove }) => {
  return (
    <Row>
      <Title
        completed={todo.completed}
        onPress={() => onToggle(todo.id)}
      >
        {todo.title}
      </Title>
      <DeleteButton onPress={() => onRemove(todo.id)}>
        <DeleteText>削除</DeleteText>
      </DeleteButton>
    </Row>
  );
};

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 8px;
  border-bottom-width: 0.5px;
  border-color: #ccc;
`;

const Title = styled.Text<{ completed: boolean }>`
  font-size: 16px;
  color: ${({ completed }) => (completed ? '#888' : '#000')};
  text-decoration-line: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
`;

const DeleteButton = styled.TouchableOpacity`
  padding: 4px 8px;
`;

const DeleteText = styled.Text`
  color: #e53935;
  font-size: 14px;
`;