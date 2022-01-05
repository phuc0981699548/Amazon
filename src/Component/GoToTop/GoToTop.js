import React, { useState, useEffect } from 'react'
import './GoToTop.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function GoToTop() {
    const [showGoToTop, setShowGoToTop] = useState(false)

    const handleClick = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
           
          })
    }

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY > 200)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)

        }
    }, [])

    return (
        <div>
            {showGoToTop && 
                <ArrowUpwardIcon 
                    className="home-goToTop"
                    onClick={handleClick}
                />
            
            }
            
        </div>
    )
}

export default GoToTop
