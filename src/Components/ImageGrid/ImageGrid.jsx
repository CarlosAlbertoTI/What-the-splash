import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// Import css
import './ImageGrid.css'

// Import components
import Button from "../Button/Button";
import Stats from "../Stats/Stats";

import { loadImages } from "../../actions";

const ImageGrid = () => {
  const state = useSelector((state) => state)
  const { images, error, isLoading, imageStats } = state

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadImages())
  }, [dispatch])


  return (
    <div className="content">
      <section className="grid">
        {isLoading && <h1>Loading.....</h1>}
        {!isLoading && (images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(
              image.height / image.width,
            )}`}
          >
            <Stats stats={imageStats[image.id]}/>   
            <img
              src={image.urls.small}
              alt={image.user.username}
            />
          </div>
        )))}
      </section>
      {error && <div className='error'>{JSON.stringfy(error)}</div>}
      <Button
        onClick={() => !isLoading && dispatch(loadImages())}
        loading={isLoading}
      >
        Load Images
        </Button>
    </div>
  )
}

export default ImageGrid
