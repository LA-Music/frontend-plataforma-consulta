import { isValid } from "utils/utils"

export const check = {
  check: function (state, value) {
    let newArray = isValid(state) ? state : []

    let filter = state.filter(name => name.indexOf(value) !== -1)
        filter.length === 0 && isValid(value) && newArray.push(value)

    return newArray
  }
} 

export const remove = {
  music: function (value, form, dispatch) {
    let index = form.lista_musicas.indexOf(`${value}`);
        index !== -1 && form.lista_musicas.splice(index,1);
        dispatch({type: 'ADD_FORM', payload: {...form, lista_musicas: form.lista_musicas}})
  },

  sociais: function (value, form, dispatch) {
    let index = form.redes_sociais.indexOf(`${value}`);
        index !== -1 && form.redes_sociais.splice(index,1);
        dispatch({type: 'ADD_FORM', payload: {...form, redes_sociais: form.redes_sociais}})
  },

  artista: function (value, form, dispatch) {
    let index = form.nome_artistico.indexOf(`${value}`);
        index !== -1 && form.nome_artistico.splice(index,1);
        dispatch({type: 'ADD_FORM', payload: {...form, nome_artistico: form.nome_artistico}})
  }


}

export const attrFields = {
  nomeCompleto: {
    id: 'nomeCompleto',
    required: true,
    name: 'nome',
    placeholder: 'Fernando Santos da Cruz', 
  },

  email: {
    id: 'email', 
    required: true,
    name: 'email', 
    placeholder: 'exemplo@gmail.com', 
  },
  
  telefone: {
    id: 'telefone', 
    required: true,
    name: 'telefone', 
    placeholder: '(00) 0 0000-0000', 
  },
  
  nomeArtistico: {
    id: 'nomeArtistico', 
    name: 'nome_artistico', 
    placeholder: 'Nome da banda ou artista', 
  },

  associacao: {
    id: 'associacao', 
    name: 'associacao',  
    placeholder: 'Selecione uma associação'
  },

  cpf: {
    id: 'cpf', 
    name: 'cpf', 
    placeholder: '999.999.999-99', 
  },

  musicas: {
    id: 'musicas', 
    name: 'lista_musicas', 
    placeholder: 'Nome da música', 
  },

  nome: {
    id: 'nome',
    required: true, 
    name: 'nome', 
    placeholder: 'Nome do artista', 
  }

}