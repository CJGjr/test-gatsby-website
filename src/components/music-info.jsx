import React from 'react'

const MusicInfoComponent = () => {
    return (
        <>
        <p>This is my music info stats</p>

        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DRXRCy7uI_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div>
        <h2>Title of the track</h2>
        <p>About the track</p>
        </div>

        <div>
        <h2>Track Details</h2>
        <ul>
            <li>Length: 3:42</li>
            <li>Artist: Dua Lipa</li>
            <li>Track Name: Track Name</li>
            <li>Album: Blah</li>
        </ul>
        </div>

        <div>
        <h3>Listen</h3>
        <ul>
            <li>Spotify</li>
            <li>Apple Music</li>
            <li>SoundCloud</li>
        </ul>
        </div>
        </div>
        </>
    )
}

export default MusicInfoComponent

