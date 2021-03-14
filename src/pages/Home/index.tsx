/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IFilm, ITMDbFilmsResponse } from '../../models';
import { Searchbar } from '../../components';
import { FilmCardContainer, Tooltip, FilmCard } from './Home.style';
import { PageContainer, Poster } from '../../styles/global';
import { TMDb } from '../../services';
import { AxiosResponse } from 'axios';

const Home= () => {
  const history = useHistory();
  const [filmList, setFilmList] = useState<IFilm[]>([]);
  const [searchValue, setSearchValue] = useState('');

  // OnComponentMount we search to initiate page
  useEffect(() => {
    search();
  }, [])

  // on SearchValue update we search for films
  useEffect(() => {
    search();
  }, [searchValue])
  
  /**
   * Search method call two distinct endpoints depending on the searchValue param
   * 
   * If searchValue is empty it means we just loaded the component or we emptied the searchbar
   * so we look for the most popular films
   * 
   * If searchValue is set, we use the search endpoint
   * 
   * Both results goes into filmList
   */ 
  const search = () => {
    if (searchValue === '') {
      TMDb.getPopularFilms().then((response: AxiosResponse<ITMDbFilmsResponse>) =>
        setFilmList(response.data ? response.data.results : [])
      )
    } else {
      TMDb.getSearchFilms(searchValue).then((response: AxiosResponse<ITMDbFilmsResponse>) =>  
        setFilmList(response.data ? response.data.results : [])
      )
    }
  }

  return (
    <PageContainer>
      <Searchbar label='Rechercher un film' onSearch={(newValue: string) => setSearchValue(newValue)} />
      <FilmCardContainer>
        {filmList.length > 0 && filmList.map((film: IFilm) => (
          <FilmCard key={`filmcard_${film.id}`}>
            <Poster key={film.id} src={`${process.env.REACT_APP_TMDb_IMG_LINK}${film.poster_path}`} alt={film.title} />
            <Tooltip
              key={`tooltip_${film.id}`}
              onClick={() => history.push(`/film/${film.id}`)}
            >
              {film.title}
            </Tooltip>
          </FilmCard>
          )
        )}
      </FilmCardContainer>
    </PageContainer>
  )
}

export default Home;