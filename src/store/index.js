import { createStore } from 'redux'

const INITIAL_STATE = {
  form: false,
  data: { 
          who: '',
          nome_artista: "", 
          nome: "", 
          email: "", 
          cpf:"", 
          telefone: "", 
          nome_artistico: "", 
          associacao: "", 
          redes_sociais: [], 
          lista_musicas: [],
          requiredStep1: true,
          requiredStep2: false },
};

function form(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'ADD_FORM':
      let requiredStep1 = action.payload.email !== '' && action.payload.nome !== '' ? false : true

      return { ...state, data:{...action.payload, requiredStep1: requiredStep1}}
    case 'INIT_FORM':
      const { form } = action.payload
      return {...state, form}
    default:
      return state;
  }
}

const store = createStore(form);

export default store;