import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

// Style
import style from './style.module.scss';

// Mutation
const inputMutation = gql`
  mutation createTask($title: String, $content: String) {
    createTask(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

function Input({ refetch }) {
  // Input state for create a taskc
  const [inputsValues, setInputValues] = useState({
    title: '',
    content: '',
  });
  // Use of the mutation
  const [createTask] = useMutation(inputMutation, {
    onCompleted: async () => {
      console.log('Completed');
    },
  });
  // Handle the form
  const handleForm = async (e) => {
    e.preventDefault();
    console.log(inputsValues);
    await createTask({
      variables: inputsValues,
    });
    await refetch();
  };
  return (
    <form onSubmit={handleForm} className={style.form}>
      <h2 className={style.addTask}>Agrega una tarea</h2>
      <input
        className={style.input}
        type="text"
        placeholder="Title"
        onChange={(e) =>
          setInputValues({ ...inputsValues, title: e.target.value })
        }
      />
      <input
        className={style.input}
        type="text"
        placeholder="Content"
        onChange={(e) =>
          setInputValues({ ...inputsValues, content: e.target.value })
        }
      />
      <button className={style.button}>Crear</button>
    </form>
  );
}

export default Input;
