

export const typeForm = () => {
  
  const papel = [
    { typePerson: 'artist',
      steps: [
        {
          inputs: [
            { id: 'nomeCompleto', name: 'nome', placeholder: 'Fernando Santos da Cruz' },
            { id: 'email', name: 'email', placeholder: 'exemplo@gmail.com' },
            { id: 'telefone', name: 'telefone', placeholder: '(00) 0 0000-0000' },
          ]
        },
        {
          inputs: [
            { id: 'nomeArtistico', name: 'nome_artistico', placeholder: 'Nome da banda ou artista' },
            { id: 'associacao', name: 'associacao', placeholder: '' }
          ]
        },
        {
          inputs: [
            { id: 'cpf', name: 'cpf', placeholder: '999.999.999-99' },
            { id: 'musicas', name: 'lista_musicas', placeholder: 'Nome da música' }
          ]
        }
      ]
    },
    {
      typePerson: 'producer',
    }
  ]

  return papel
}