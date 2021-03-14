import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { ITMDbFilmDetailResponse } from '../../models';
import { TMDb } from '../../services';
import { PageContainer, Poster } from '../../styles/global';
import { DescriptionContainer, MovieContainer, PosterContainer } from './Movie.style';

const Movie = () => {
  const params: any = useParams();
  const [film, setFilm] = useState<ITMDbFilmDetailResponse>();

  // On page load we use the id in params to get film details
  useEffect(() => {
    TMDb.getFilm(params.id).then((response: AxiosResponse<ITMDbFilmDetailResponse>) => setFilm(response.data))
  }, [params]);

  return (
    //When film is set we can display our details
    film !== undefined ? (
      <PageContainer>
        <MovieContainer>
          <DescriptionContainer>
            <div>{film.title}</div>
            <div>{film.overview}</div>
            <div>{film.vote_average}/10</div>
          </DescriptionContainer>
          <PosterContainer>
            <Poster key={film.id} src={`${process.env.REACT_APP_TMDb_IMG_LINK}${film.poster_path}`} alt={film.title} />
          </PosterContainer>
        </MovieContainer>
      </PageContainer>
    ): <div />
  )
}

export default Movie;