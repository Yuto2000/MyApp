import React, { FC, useState } from 'react';
import styled from 'styled-components/native';

interface Props {
  onAdd: (title: string) => void;
}

/**
 * 新しいToDoの入力フォーム
 */
export const TodoInput: FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    onAdd(title);
    setTitle('');
  };

  return (
    <InputRow>
      <InputField
        placeholder="新しいTodoを入力"
        value={title}
        onChangeText={setTitle}
      />
      <AddButton onPress={handleAdd}>
        <AddButtonText>追加</AddButtonText>
      </AddButton>
    </InputRow>
  );
};

const InputRow = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

const InputField = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;
  border-color: #ccc;
  margin-right: 8px;
  padding-vertical: 4px;
  font-size: 16px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #2196f3;
  padding-vertical: 8px;
  padding-horizontal: 12px;
  border-radius: 4px;
  justify-content: center;
`;

const AddButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;