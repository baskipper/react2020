import React from 'react'
import { connect } from 'react-redux'

const SongList = ({songs}) => {
    const renderList = () => {
        return songs.map(song => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button className='ui button primary'>
                            Select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            )
        })
    }
    return (
        <div className='ui divided list'>{renderList()}</div>
    )
}

const mapStateToProps = ({songs}) => {
    return {
        songs
    }
}

export default connect(mapStateToProps)(SongList)
