import React from 'react';
import ReactPlayer from 'react-player';

const LiveStream = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                url='<iframe width="560" height="315" src="https://www.youtube.com/embed/4J596qob38M?si=Hkqosqv6EYQZjhiC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                playing
                controls
                width='100%'
                height='100%'
            />
        </div>
    );
};

export default LiveStream;