import { createStore } from 'redux'

const INITIAL_STATE = {
  form: false,
  data: { 
          who: '',
          papel: '',
          nome: "", 
          nome_produtor: "",
          email: "", 
          email_produtor: "",
          cpf:"", 
          telefone: "", 
          telefone_produtor: "", 
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
      const { who } = state.data
      let requiredStep1 = who === 'artist' ? action.payload.email !== '' && action.payload.nome !== '' ? false : true : action.payload.email_produtor !== '' && action.payload.nome_produtor !== '' && action.payload.telephone_produtor !== '' ? false : true

      return { ...state, data:{...action.payload, requiredStep1}}
    case 'INIT_FORM':
      const { form } = action.payload
      return {...state, form}
    default:
      return state;
  }
}

const store = createStore(form);

export default store;