import React from 'react';
import { Spinner } from './Loader.style';

type LoaderProps = {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => (
  isLoading ? <Spinner /> : <div />
)

export default Loader;