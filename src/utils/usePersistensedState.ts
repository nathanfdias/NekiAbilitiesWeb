import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;

// Este código é uma custom hook chamada "usePersistedState". O objetivo dessa função é criar um estado com um valor inicial e armazená-lo no localStorage do navegador para persistir o valor mesmo após a atualização ou fechamento da página.

// A função recebe dois parâmetros: uma string "key" para identificar o valor armazenado no localStorage e um valor inicial "initialState". Ela retorna uma tupla contendo o valor atual do estado e uma função "setState" para atualizar esse valor.

// A primeira linha da função usa o useState para criar um estado e inicializá-lo com o valor retornado pela função passada como argumento, que verifica se existe um valor armazenado no localStorage com a chave "key". Se existir, o valor é convertido de volta para seu formato original usando JSON.parse() e retornado. Caso contrário, o valor inicial é retornado.

// A função useEffect é usada para atualizar o valor no localStorage sempre que o estado for alterado. Isso é feito passando a chave e o valor atual do estado como dependências para o useEffect. Dessa forma, toda vez que o valor do estado mudar, o localStorage será atualizado com o novo valor.

// Por fim, a função retorna a tupla [state, setState], contendo o valor atual do estado e uma função para atualizá-lo.