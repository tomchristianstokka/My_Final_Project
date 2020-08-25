import React, { useState } from 'react';
import styled from 'styled-components';

import Lightbox from '../../../../common/Lightbox.jsx';

const GalleryItem = ({ item }) => {

    const [showLBox, showLBoxUpdate ] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }

    const turnOff = () => {
        showLBoxUpdate(false);
    }

        return (
            <GalleryItemStyled className='GalleryItem'>
                <div className='category'>{ item.category }</div>
                <img 
                    src={ item.image } 
                    alt={ item.title }
                    onClick={ turnOn }    
                />
                <div className='title'>{item.title}</div>
                <Lightbox show={ showLBox } hideAction={ turnOff } width={ 300 }>
                    <img src={ item.image } alt={ item.title } />
                    <h3>{ item.title } </h3>
                    <div className='description'>
                        { item.description }
                    </div>
                </Lightbox>
            </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;

    border: solid 1px #8c1e1e;

    margin: 30px;
    img { 
        display: block; 
        border: solid 2px #8c1e1e;
    }

    .category {
        position: absolute;
        top: 0: right: 0; left: 0;
        background-color: rgba(255,255,255, .5);
        color: #02081b;
        padding: 10px;
        font-size: 12px;

        text-align: right;
        margin: 2px;
    } 

    .title {
        position: absolute;
        bottom: 0: right: 0; left: 0;
        background-color: rgba(255,255,255, .5);
        padding: 10px;
        font-size: 12px;
        
    }

        .Lightbox {
        img {
            border: solid 2px #02081b;
            max-width: 100%;
        }
        h3 {
            font-size: 20px;
            margin: 0px;
        }
        .description {
            color: #333;
            background-color: gray;
            max-width: 100%;
        }
    } 
`;