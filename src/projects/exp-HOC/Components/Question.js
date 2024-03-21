import React, { useState } from 'react';
import withToggle from '../HOCs/withToggle'

// + or - icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title , info , showInfo , clickHandlerQus}) => {

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => clickHandlerQus()}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default withToggle(Question);
