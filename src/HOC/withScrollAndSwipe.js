// withScrollAndSwipe.js

import React, { useContext, useEffect, useRef } from 'react';
import { PageContext } from '../Context/PageContext'

const withScrollAndSwipe = (WrappedComponent) => {
    return function ScrollAndSwipeEnhanced(props) {
        const { currentPage, setCurrentPage, setDirection } = useContext(PageContext)
        const touchStartY = useRef(0)
        const touchEndY = useRef(0)
        useEffect(() => {
            const handleScroll = (e) => {
                debugger
                e.preventDefault()
                if (e.deltaY > 0 && currentPage < props?.pages.length - 1) {
                    setDirection('down')
                    setCurrentPage(currentPage + 1)
                } else if (e.deltaY < 0 && currentPage >= 1) {
                    setDirection('up')
                    setCurrentPage(currentPage - 1)
                }
            }

            const handleTouchStart = (e) => {
                e.preventDefault()
                touchStartY.current = e.touches[0].clientY
            }

            const handleTouchMove = (e) => {
                e.preventDefault()
                touchEndY.current = e.touches[0].clientY
            }

            const handleTouchEnd = () => {
                if (touchStartY.current < touchEndY.current + 5 && currentPage > 1) {
                    setDirection('up')
                    setCurrentPage(currentPage - 1)
                } else if (touchStartY.current > touchEndY.current - 5 && currentPage < props?.pages.length) {
                    setDirection('down')
                    setCurrentPage(currentPage + 1)
                }
            }

            const divElement = props?.divRef.current
            divElement.addEventListener('wheel', handleScroll)
            divElement.addEventListener('touchstart', handleTouchStart)
            divElement.addEventListener('touchmove', handleTouchMove)
            divElement.addEventListener('touchend', handleTouchEnd)
            return () => {
                divElement.removeEventListener('wheel', handleScroll)
                divElement.removeEventListener('touchstart', handleTouchStart)
                divElement.removeEventListener('touchmove', handleTouchMove)
                divElement.removeEventListener('touchend', handleTouchEnd)
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currentPage, props, touchEndY, touchStartY])

        return <WrappedComponent {...props} currentpage={currentPage} />;
    };
};

export default withScrollAndSwipe;
