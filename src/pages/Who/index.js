import React from 'react';
import Song from '../../assets/img/song.svg'
import SongWhite from '../../assets/img/songWhite.svg'
import Economic from '../../assets/img/economic.svg'
import EconomicWhite from '../../assets/img/economicWhite.svg'
import { useDispatch, useSelector } from 'react-redux';
import { Title, ButtonRadio, Next } from './styles';

function Who(props) {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state);

  const handlePapel = (who, papel) => dispatch({type: 'ADD_FORM', payload: {...data, who, papel}})

  return (
    <>
      <Title className="mb-4">Quem você é ?</Title>
      <ButtonRadio onClick={() => handlePapel('artist', 'artista')} selected={data.who === 'artist'} className="d-block text-center w-100 text-capitalize py-3 my-3">
        <img src={data.who === 'artist' ? SongWhite :Song} alt="Song" className="mr-4 img-fluid" /> Artista
      </ButtonRadio>
      <ButtonRadio onClick={() => handlePapel('producer', 'produtor')} selected={data.who === 'producer'} className="d-block text-center w-100 text-capitalize py-3 my-3">
        <img src={data.who === 'producer' ? EconomicWhite : Economic} alt="producer" className="mr-3 img-fluid" /> Produtor/Empresário
      </ButtonRadio>
      <Next variant="contained" disabled={data.who !== '' ? false : true} onClick={() => dispatch({type: 'INIT_FORM', payload: {form: true}})} className="d-block w-100 py-3 text-capitalize">Próxima</Next>

    </>
    );
}

export default Who;