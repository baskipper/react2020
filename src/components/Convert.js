import React, {useState, useEffect} from 'react'
import axios from 'axios'

import key from './API_KEY.json'

const API_KEY = key.translate

const Convert = ({language, text}) => {
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2',
            {},
            {
                params: {
                    q: text,
                    target: language.value,
                    key: API_KEY
                }
            })
    }, [language, text])

    return (
        <div/>
    )
}

export default Convert
