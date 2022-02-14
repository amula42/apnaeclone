import React from 'react'
import Titlesec from '../../data/Titlesec'

const Offers = () => {
  return (
    <div>
        <Titlesec titlesec="Offer Chart" />
        <div className="page-content">
            {/* team start */}
            <section className="bg-contain" data-bg-img="images/pattern/02.png">
                <div className="container">
                    <div className="col-lg-12 col-md-8 col-xs-12">
                        <p style={{fontSize: "17px",paddingBottom: "20px"}}> </p>
                        <div id="printableTable">
                            <div>
                                <table rules="rows" className="table  MyGrid" id="ContentPlaceHolder1_gvTest" style={{backgroundColor:"White",borderColor:"#E7E7FF",borderWidth:"1px",borderStyle:"None",borderCollapse:"collapse",width: "99%"}}>
                                    <tbody>
                                        <tr className="HeaderStyle" style={{color:"#F7F7F7",backgroundColor:"#4A3C8C",fontWeight:"bold"}}>
                                            <th scope="col">SR No.</th>
                                            <th scope="col">Target Amout </th>
                                            <th scope="col">Offer Name</th>
                                            <th scope="col">Price Image</th>
                                        </tr>
                                        <tr className="RowStyle" style={{color:"#4A3C8C",backgroundColor:"#E7E7FF"}}>
                                            <td><span id="ContentPlaceHolder1_gvTest_lblRowNumber_0">1</span></td>
                                            <td><span id="ContentPlaceHolder1_gvTest_lbltarget_0">25,00,000/-</span></td>
                                            <td><span id="ContentPlaceHolder1_gvTest_lbloffername_0">Shop Branding</span></td>
                                            <td>
                                                <img id="ContentPlaceHolder1_gvTest_lblofferimg_0"
                                                src="images/feature/080321083541giftsbox.png" 
                                                alt='080321083541giftsbox'
                                                style={{width: "270px", height: "140px"}} />
                                            </td>
                                        </tr>
                                        <tr className="AltRowStyle" style={{color:"#4A3C8C",backgroundColor:"#F7F7F7"}}>
                                            <td><span id="ContentPlaceHolder1_gvTest_lblRowNumber_1">2</span></td>
                                            <td><span id="ContentPlaceHolder1_gvTest_lbltarget_1">35,00,000/-</span></td>
                                            <td><span id="ContentPlaceHolder1_gvTest_lbloffername_1">Music Player</span></td>
                                            <td>
                                                <img id="ContentPlaceHolder1_gvTest_lblofferimg_1" 
                                                src="images/feature/080321083605homethreater.png" 
                                                alt='080321083605homethreater'
                                                style={{width: "270px", height: "140px"}} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Offers