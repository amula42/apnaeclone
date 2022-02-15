import React from 'react'
// import ReactToPrint from 'react-to-print';
import Titlesec from '../../data/Titlesec'

const CommissionChart = () => {

    // const componentRef = useRef();
    // const printDiv = () => {
    //     window.print()
    // }

  return (
    <div>
        <Titlesec titlesec="Commission Chart"/>
        <div className="page-content">
        {/* team start */}
        <section className="bg-contain" style={{backgroundImage:"url(images/pattern/02.png)"}}>
            <div className="container">
                <div className="text-center">
                    {/* <ReactToPrint
                        trigger={() => <a type="submit" className="btn btn-theme"> Print</a>}
                        content={() => componentRef.current}
                    /> */}
                    {/* <a href='/' type="submit" className="btn btn-theme"> Print</a> */}
                    {/* <a href="Commission_chart-2.html" type="submit" className="btn btn-theme" onclick="salvaPlanilha()"> Download Excel</a> */}
                </div>
                <div className="col-lg-12 col-md-8 col-xs-12">
                    <h2 className="text-center"> Commission Chart </h2>
                    <p style={{fontSize: "17px",paddingBottom: "20px"}}> </p>
                    <div id="printableTable">
                        <div>
                            <table rules="rows" className="table  MyGrid" id="ContentPlaceHolder1_gvTest" style={{backgroundColor:"White",borderColor:"#E7E7FF",borderWidth:"1px",borderStyle:"None",borderCollapse:"collapse",width: "99%"}}>
                                <tbody>
                                <tr className="HeaderStyle" style={{color:"#F7F7F7",backgroundColor:"#4A3C8C",fontWeight:"bold"}}>
                                    <th scope="col">SR No.</th>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Retailer</th>
                                    <th scope="col">Distributor</th>
                                    <th scope="col">Master Distributor</th>
                                    <th scope="col">State Head</th>
                                </tr>
                                <tr className="RowStyle" style={{color:"#4A3C8C",backgroundColor:"#E7E7FF"}}>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblRowNumber_0">1</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblservicename_0">Mobile Recharge</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblretailer_0">According operator</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lbldis_0">0.10%</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblmddis_0">0.05%</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblsh_0">0.03%</span></td>
                                </tr>
                                <tr className="AltRowStyle" style={{color:"#4A3C8C",backgroundColor:"#F7F7F7"}}>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblRowNumber_1">2</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblservicename_1">DTH Recharge</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblretailer_1">According Operators</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lbldis_1">0.01/-</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblmddis_1">0.01/-</span></td>
                                    <td><span id="ContentPlaceHolder1_gvTest_lblsh_1">0.01/-</span></td>
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

export default CommissionChart