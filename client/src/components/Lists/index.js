import React, { useEffect } from 'react';
import vocabListAPI from '../../utils/vocabListAPI';

function Lists() {
    useEffect(() => {
        vocabListAPI.getAll()
            .then(results => {
                console.log(results);
            })
    }, [])
    return (
        <>
            I'm the list page
        </>
    )
};

export default Lists;