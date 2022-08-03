import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import s from './Loader.module.scss';

export const CustomLoader = () => (
    <TailSpin color="#add8e6" wrapperClass={s.loaderItem} />
);
