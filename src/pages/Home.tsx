import React, { useState } from 'react';
import { IFilm } from '../models';

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const [filmList, setFilmList] = useState<IFilm[]>([]);
  
  return (
    <div>
      Filmlist {filmList.length}
    </div>
  )
}

export default Home;