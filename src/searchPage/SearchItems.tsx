import React from 'react';
import './SearchPage.scss'
import SearchItemsValue from './SearchItemsValue';
import {SearchItemsPlayers, SearchItemsGuilds} from './SearchItemsPlayers'
import styled from 'styled-components'

const Button = styled.button`
    width: 172px;
    height: 48px;
    background: transparent;
    border-radius: 12px;
    background: #404974;
    font-family: Poppins;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #E9EFF9;
    border: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    `


function SearchItems() {
    return (
        <div className='searchItems'>
            <p className='searchItems-p'>PLAYERS</p>
            <div className = 'hr'></div>
            {SearchItemsPlayers.map((item: any )=> {
                return (
                    <SearchItemsValue
                        key = {item.id}
                        img= {item.img}
                        title= {item.title}
                        text= {item.text}
                    />
                    
                )
            })}
            <p className='searchItems-p'>GUILDS</p>
            <div className = 'hr'></div>
            {SearchItemsGuilds.map((item: any)=> {
                return (
                        <SearchItemsValue
                            key= {item.id}
                            img= {item.img}
                            title= {item.title}
                            text= {item.text}
                        />
                    )
            })}
            <div className = 'hr-last'></div>
            
            <Button> VIEW ALL 45 RESULTS</Button>
                       
        </div>
    )
}

export default SearchItems
