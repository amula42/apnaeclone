import React from 'react'
import { Photodata } from '../../data/Gdata'
import Titlesec from '../../data/Titlesec'

const PhotoGallery = () => {
  return (
    <div>
        <Titlesec titlesec="Photo Gallery"/>
        <div className="page-content">
            {/* about start */}
            <section className="pos-r o-hidden">
                <div className="pattern-3">
                    <img className="img-fluid rotateme" src="images/pattern/03.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="row">

                        {Photodata.map((photos,photokey) => {
                            return(
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb" key={photokey}>
                                    <img className="img-thumbnail" src={photos.pimgs} alt="gallery" />
                                </div>
                            )
                        })} 
                                            
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}
        </div>
    </div>
  )
}

export default PhotoGallery