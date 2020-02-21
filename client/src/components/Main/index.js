import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Lists from '../Lists';
import Learn from '../Learn';
import Search from '../Search';
import Practice from '../Practice';
import './style.css';

function Main() {

    const [ redirect, setRedirect ] = useState({
        lists: false,
        learn: false,
        search: false,
        practice: false
    });

    useEffect(() => {
        // reload page on change to redirect
    }, [redirect]);

    const handleClick = event => {
        if (event.target.textContent === 'Lists') {
            setRedirect({
                lists: true
            })
        } else if (event.target.textContent === 'Learn') {
            setRedirect({
                learn: true
            })
        } else if (event.target.textContent === 'Search') {
            setRedirect({
                search: true
            })
        } else {
            setRedirect({
                practice: true
            })
        }
    }

    const renderRedirect = () => {
        if (redirect.lists) {
            return <Redirect to="/lists" />
        } else if (redirect.learn) {
            return <Redirect to="/learn" />
        } else if (redirect.search) {
            return <Redirect to="/search" />
        } else if (redirect.practice) {
            return <Redirect to="/practice" />
        }
    };

    return (
        <>
        {renderRedirect()}
            <div class="container">
                <div class="title">
                    플래쉬카드
                </div>
                <div class="options">
                    <div class="subsection blue" onClick={handleClick}>
                        Lists
                    </div>
                    <div class="subsection red" onClick={handleClick}>
                        Learn
                    </div>
                    <div class="subsection red" onClick={handleClick}>
                        Search
                    </div>
                    <div class="subsection blue" onClick={handleClick}>
                        Practice
                    </div>
                </div>
            </div>
        </>
    )
};

export default Main;