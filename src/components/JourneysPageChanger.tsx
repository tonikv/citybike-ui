/*
    Handles buttons to change page for journeys
*/

import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IPageChanger } from '../types';

const JourneysPageChanger: React.FC<IPageChanger> = ({ changePageNext, changePagePrev, isLoading }) => {

    return (
        <div className='pageChangerContainer'>
            <Button aria-label="Prev Page Button" size="sm" onClick={changePagePrev} disabled={isLoading}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" aria-label="Prev Page" className='shadow'/> {/* Icon for "Prev Page" */}
            </Button>
            <Button aria-label="Next Page Button" size="sm" style={{marginLeft: 10}} onClick={changePageNext} disabled={isLoading}>
                <FontAwesomeIcon icon={faArrowRight} size="2x" aria-label="Next Page" className='shadow'/> {/* Icon for "Next Page" */}
            </Button>
        </div>
    )
}

export default JourneysPageChanger;

