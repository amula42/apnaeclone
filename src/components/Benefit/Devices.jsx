import React from 'react'
import { Devicesbenefit } from '../../data/Bdata'
import Titlesec from '../../data/Titlesec'

const Devices = () => {
  return (
    <div>
        <Titlesec titlesec="Devices" />
        <div className="page-content">
            <section className="bg-contain" style={{backgroundImage: "url(images/pattern/02.png)"}}>
                <div className="container">
                    <div className="col-lg-12 col-md-8 col-xs-12 ">
                        <h2 className="text-center"> Devices </h2>
                    </div>
                    <div className="row">
                        {Devicesbenefit.map((device,devicekey)=>{
                            const { pic1, pic2, name, price2, price1 } = device;
                            return(
                                <div className="col-md-3 col-sm-6" key={devicekey}>
                                    <div className="product-grid4">
                                        <div className="product-image4">
                                            <img className="pic-1" src={pic1} alt={pic1} />
                                            <img className="pic-2" src={pic2} alt={pic2} />
                                        </div>
                                        <div className="product-content">
                                            <h5 className="title2">
                                                <span id="ContentPlaceHolder1_rptBind_Label1_0">{name}</span>
                                            </h5>
                                            <span className="price2">Rs &nbsp;</span>
                                            <span id="ContentPlaceHolder1_rptBind_lbldisamt_0" className="price2">{price2}</span>
                                            <span  className="price1">Rs</span> 
                                            <span>
                                                <span id="ContentPlaceHolder1_rptBind_lblactualamt_0" className="price1">{price1}</span>
                                            </span>
                                            <a className="add-to-cart" href="/contact">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
                <hr />
            </section>
        </div>
    </div>
  )
}

export default Devices