import React from 'react'
import { Videodata } from '../../data/Gdata'
import Titlesec from '../../data/Titlesec'

const VideoGallery = () => {
  return (
    <div>
        <Titlesec titlesec="Video Gallery"/>
        <div className="page-content">
        {/* project start */}
        <section className="o-hidden" style={{backgroundImage:"url(images/pattern/02.png)"}}>
            <div className="container">
                <div className="row">

                    {Videodata.map((videos,videokey) => {
                        return(
                            <div className="col-md-3 col-lg-3" key={videokey}>
                                <iframe title='yvideo' width="320" height="280" src={videos.vvideo} />
                            </div>
                        )
                    })} 
                
                </div>
            </div>
        </section>
        {/* project end */}
    </div>
    </div>
  )
}

export default VideoGallery