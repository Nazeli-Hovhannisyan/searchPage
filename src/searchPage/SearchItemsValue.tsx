import React from 'react'
import './SearchPage.scss';


type Props= {
    img?: string
    title: string
    text: string

}


const SearchItemsValue: React.FC<Props> = (props)=> {
    return (
        <div className= 'searchItemsValue'>
            <div  className='searchItemsValueImg'>
                <img src= {props.img} alt = 'icon'/>
            </div> 
            <div className='searchItemsValue-text'>
                <p className='searchtitle'>{props.title}</p>
                <p className='searchtext'>{props.text}</p>
            </div>           
           
        </div>
    )
}

export default SearchItemsValue
