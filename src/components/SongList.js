import React from 'react'
import {connect} from 'react-redux'

import {selectSong} from "../store/actions";

const SongList = ({songs, favoriteTitle, selectSong}) => {
    const renderList = () => {
        return songs.map(song => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button
                            className='ui button primary'
                            onClick={() => selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className='content'>{song.title}
                        {song.title === favoriteTitle &&
                            <div>FAVORITE!</div> }
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='ui divided list'>{renderList()}</div>
    )
}



const mapStateToProps = ({songs, favoriteTitle}) => {
    return {
        songs,
        favoriteTitle
    }
}

export default connect(mapStateToProps, {selectSong})(SongList)
