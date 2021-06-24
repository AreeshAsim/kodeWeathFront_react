import React, { useState, useEffect } from 'react';
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import {NavLink} from "react-router-dom"
import "./report.css"
import axios from "axios"
import { io } from "socket.io-client";

function Report() {

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [categories, showCategories] = useState([]);
  const [courses, showCourses] = useState([]);
  const [users, showUsers] = useState([]);
  const [payments, showPayments] = useState([]);
  const [getCrypto,showCrypto] = useState([]); 
  const  [showsocket,showSocketData] = useState([]);
  const [show24h,show24Hours] = useState([]);
  const [vol,showVol] = useState([]);
  const [count,setCount] = useState(1);
  const [countOne,setCountOne] = useState(1);
  const [LoadMore,showLoadMore] = useState(false);
  const [LoadMore2,showLoadMoreTwo] = useState(false);
  const [tab, setTab] = React.useState(1);
  const [preciseMetals, showpreciseMetals] = useState([]);  
  const [search, setSearch] = useState("")
 
  const  [Markets , showMarket] = useState([]); 
  
  var socket = null;
 






  const MarketsFun = ()=>{
    // setTab(3);
    
    setCountOne(countOne+1);
    
    const  cryptoObj1 ={
      
      pageNumber:countOne
    } 
    
    
     console.log("kkk");
  
    
    axios.post(`${BASE_URL}/getMarketStackData`,cryptoObj1,{headers: {
        'authorization': 'Basic Y29kZVdlYWx0aDphc2ltOTI1NzhAZ21haWwuY29t',
      }
     
      }).then((res)=>{   
  
        
      
       
        const data1 = res.data.data
       
        showMarket(data1)
        loadMoreOne(data1);
    
       
    
      
        
      
      }).catch((err)=>{
      
      
      
      
      
        console.log(err);
      })
    
      const loadMoreOne = (data1)=>{
          
        console.log("ffafa",data1);
      
       
         
       
       
       if(data1.length>0){
          showLoadMoreTwo(true)
        
        }
        else{
          showLoadMoreTwo(false)
          
        }
    
      
        var array = Markets.concat(...data1)
        showMarket(array);
    
       };


  
  
   }
   











 
  

   const  cryptoData = ()=>{
        
   
    setCount(count + 1)
    const  cryptoObj ={
      user_id:"60c1af0768386675976cbce1",
      pageNumber:count
    }
   
   
    axios.post(`${BASE_URL}/GetCrypto/`,cryptoObj).then((res)=>{







      
      //  console.log(res.data.status);
      //  console.log(res.data.propertyDetails);
       
      
       if(res.data.type == 200){
        // showCrypto(res.data.propertyDetails);
    

        loadMore(res.data.propertyDetails);
     
     

       }
       
     }
     )

  
     

 const loadMore = (data)=>{
  console.log(data.length);
  if(data.length>0){
    showLoadMore(true)
  
  }
 
  else{
    showLoadMore(false)

  }


 var array = getCrypto.concat(...data)
 


 
 showCrypto(array);
 
   
 }


   }





 
 
 
 const MetalsFun = ()=>{
      setTab(2);
    axios.get(`${BASE_URL}/get_precious_matelPrices`).then((res)=>{

          console.log(res.data.data[0].rates); 
        
           var rates = [];

           for (var i = 0; i<Object.keys(res.data.data[0].rates).length; i++){
            var rateObj = {
              metal_name: Object.keys(res.data.data[0].rates)[i], current_market_price: res.data.data[0].rates[Object.keys(res.data.data[0].rates)[i]]
            }

            //  console.log(rateObj);
             rates.push(rateObj)

            //  console.log(rates);
            


           } 
           showpreciseMetals(rates)
		   
			
	   }
	   ).catch ((error) => {
			console.log(error)
			// showCategories([]);
	   })


 }


 
 
 
 
 
 
 
 
 


 
 


 
  useEffect(() => {
  
    axios.get(`${BASE_URL}/show/categories`).then((res)=>{

		   
			if(res.data.type == 200){
				
      
        showCategories(res.data.data);
        

			}else{
			
				showCategories([]);
			}
	   }
	   ).catch ((error) => {
			console.log(error)
			showCategories([]);
	   })


    axios.get(`${BASE_URL}/show/courses`).then((res) => {


      showCourses(res.data)

    })
    axios.get(`${BASE_URL}/getAllUsersDetails`).then(res =>


      showUsers(res.data.data)
    );


   

    axios.get(`${BASE_URL}/getAllPaymentDetails`).then((res)=>{

      
      if(res.data.type == 200){
        showPayments(res.data.data);

     

      }else{
        showPayments([]);
      }
     }
     ).catch ((error) => {
      console.log(error)
      showPayments([]);
     })

   
   
   
     cryptoData();
   


     socket = io("http://207.180.212.174:3001/");
      socket.emit('coin_market_price', '');
      socket.emit('24Hchange', '');
      
    
      socket.on("coin_market_price", msg => {
          //  console.log(msg)
           showSocketData(msg.data);
           socket.emit('coin_market_price', '');
       })
       socket.on("24Hchange", msg => {
        show24Hours(msg.data);
      
        socket.emit('24Hchange', '')
      })
      socket.on("24Hchange", msg => {
        showVol(msg.data);
      
        socket.emit('24Hchange', '')
      })

      MarketsFun();



  }, [])
 
 
 
 
 
 
 
 
 
  const socketData= (c)=>{
      // return Number(showsocket.find(a => a.symbol == c)?.price).toLocaleString(undefined,{maximumFractionDigits:2})
          
      if (c.includes('USDT')) {
        return Number(showsocket.find(a => a.symbol == c)?.price)?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      } else if (c.includes("BTC")) {
        return Number(showsocket.find(a => a.symbol == c)?.price
          * showsocket.find(a => a.symbol == "BTCUSDT")?.price
        )?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      } else {
        return Number(showsocket.find(a => a.symbol == c)?.price)?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      }
  }
  const getPerc = (c) => {
    if (show24h.length > 0) {
      if (c.includes('USDT')) {
        return Number(show24h.find(a => a.symbol == c)?.change)?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      } else if (c.includes("BTC")) {
        return (parseFloat(show24h.find(a => a.symbol == c)?.change)
          + parseFloat(show24h.find(a => a.symbol == "BTCUSDT")?.change))
          ?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      } else {
        return Number(show24h.find(a => a.symbol == c)?.change)?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      }
    }
    else {
      return 0;
    }
  }
  const getVolumn = (c) => {
    if (vol.length > 0) {
      return Number(vol.find(a => a.symbol == c)?.volume)?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      // if (c.includes('USDT')) {
      // //   return Number(Globals.percentages.find(a => a.symbol == c)?.volume)?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      // // // } else if (c.includes("BTC")) {
      // // //   return (parseFloat(Globals.percentages.find(a => a.symbol == c)?.volume)
      // // //     * Number(Globals.Cprices.find(a => a.symbol == c)?.price
      // // //       * Globals.Cprices.find(a => a.symbol == "BTCUSDT")?.price
      // // //     ))
      // // //       ?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      // // //   } else {
      // // //   return Number(Globals.percentages.find(a => a.symbol == c)?.volume)?.toLocaleString(undefined, { maximumFractionDigits: 2 })
      // // // }
    }
    else {
      return 0;
    }
  }

  

  const SearchData = (e)=>{

    setSearch(e.target.value)
    // showLoadMoreTwo(false)

  }












  const breadcrumbNavigation = [
    {
      title: 'Reporting Page',
      link: 'add-subscription'
    },
    {
      title: 'Reporting Page',
      link: 'add-subscription'
    }
  ]




  return (

    <React.Fragment>
      <ChangeTitle title={'Home'} />
      {/*SideBar*/}
      <SideBar />
      {/*Page Header*/}
      <PageHeader />
      <BreadCrumb navigation={breadcrumbNavigation} />
      {/* main content starts here */}

      <section class="pageWrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="container">
                <div class="row">
                 
               
                  <div class="col-md-3">
                  <NavLink to ="/manage-categories">
                    <div class="card-counter primary">
                   
                      <i class="fa fa-list-alt"></i>
                      <span class="count-numbers">{categories.length}</span>
                     
                      <span class="count-name">Categories</span>
                     
                    </div>
                    </NavLink>
                  </div>
                

                  <div class="col-md-3">
                      <NavLink to ="/manage-courses">
                    <div class="card-counter danger">
                      <i class="fa fa-book"></i>
                      <span class="count-numbers">{courses.length}</span>
                    
                      <span class="count-name">Courses</span>
                      
                    </div>
                    </NavLink>
                  </div>

                  <div class="col-md-3">
                      <NavLink to ="/order-management">
                    <div class="card-counter success">
                      <i class=" fa fa-money"></i>
                      <span class="count-numbers">{payments.length}</span>
                    
                      <span class="count-name">Orders</span>
                    
                    </div>
                      </NavLink>
                  </div>

                  <div class="col-md-3">
                     <NavLink to ="/list-users">
                    <div class="card-counter info">
                      <i class="fa fa-user"></i>
                      <span class="count-numbers">{users.length}</span>
                     
                      <span class="count-name">Users</span>
                     
                    </div>
                     </NavLink>
                  </div>
                 <div className="col-md-12">
                  <div  style={{marginTop:"20px",marginBottom:"20px"}}className="d-flex justify-content-between  w-50 tab-all" role="tablist">
                  {/* <a  className={tab === 1 ? 'active  tab-class' : "tab-class-two"} onClick={()=>setTab(1)}><b>Crypto</b></a>
                  <a     className={tab === 2 ? 'active tab-class ' : "tab-class-two"} onClick={()=>setTab(2)}> <b>Metals</b></a>
                  <a    className={tab === 3 ? 'active  tab-class ' : "tab-class-two"} onClick={()=>setTab(3)}><b>  Market</b> </a> */}
                
                    <a  className={tab === 1 ? 'active  tab-class' : "tab-class-two"} onClick={()=>setTab(1)}><b>Crypto</b></a>
                  <a     className={tab === 2 ? 'active tab-class ' : "tab-class-two"} onClick={MetalsFun}> <b>Metals</b></a>
                  <a    className={tab === 3 ? 'active  tab-class ' : "tab-class-two"} onClick={()=>setTab(3)}><b>  Market</b> </a>
                 
                 </div>

                 </div>

                
                 
     {tab === 1 &&  <>  
      <div class="col-md-12">
                 <div className="divider">
                   <span><b>Crypto Currency</b></span>
                 </div>
                 </div>                
                  
    <table class="table table-hover  border-0  border_null">
    <thead>
    <tr>
      <th scope="col"><strong>#</strong></th>
      <th  scope="col"><div className="d-flex align-items-center"><strong>Name</strong></div></th>
      <th scope="col"><strong>Price</strong></th>
      <th scope="col"><strong> 24h %</strong></th>
      <th scope="col"><strong>Volume(24h)</strong> </th>
     
    </tr>
  </thead>
 {getCrypto.map((crypto,index)=>{  return(<>          
  <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td  >
        <div className="d-flex align-items-center">
        
        <img src={`${BASE_URL}/coin_symbol/${crypto.slug.toLowerCase()}.png`} width="30px" height="30px" /><div style={{marginLeft:"10px"}}><b> {crypto.name}</b></div> <div style={{color:"gray",marginLeft:"10px", }}>{crypto.slug}</div>
        </div>
        </td>
      <td><b>{`$${socketData(crypto.coin)}`}</b></td>
      
     
      <td style={{color: getPerc(crypto.coin) > 0 ? "green" : "red"}}><b>{`${getPerc(crypto.coin)}%`}</b></td>
   
      <td ><b>{getVolumn(crypto.coin)}</b><div style={{color:"gray",marginLeft:"3px"}}>{crypto.slug}</div> </td>
    
    </tr>
  

  </tbody>
  </>)             })}
 
</table>


{LoadMore == false ?(null):(<button  className ="btn btn-primary btn-sm mx-auto d-block" onClick={cryptoData}>Load More</button>)}

</>
}  
{tab === 2 &&
               <>
                <div class="col-md-12">
                 <div className="divider">
                   <span><b>Metals Currency</b></span>
                 </div>
                 </div> 
              
               <table class="table table-hover  border-0  border_null">
               <thead>
               <tr>
                 <th scope="col"><strong>#</strong></th>
                 <th  scope="col"><strong>Name</strong></th>
                 <th scope="col"><strong>Price</strong></th>
               
               </tr>
             </thead>


               
              {preciseMetals.map((metals,index)=>{  return(<>          
             <tbody>
               <th>{index+1}</th>
               <td>{metals.metal_name}</td>
               <td>{`$${metals.current_market_price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</td>
              
                 
             
           
             </tbody>
              </>)             })} 
              
            
           </table>
           
           
       
           
           </>       
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              }
 
 {tab === 3 &&
                
                
                
                
                <>

               <div class="col-md-12">
                 <div className="divider">
                   <span><b>Market Currency</b></span>
                 </div>
                 <div class="input-group search-input">
  										<div class="form-outline" >

										  <input type="text" name="name" placeholder="Search Name" className="form-control" id="exampleFormControlInput1" defaultValue={""} onChange={SearchData} />
    						              
    						             </div>
 							
								        </div>
                
                
                 </div> 
              
             <table class="table table-hover  border-0  border_null">
              <thead>
              <tr>
                <th scope="col"><strong>#</strong></th>
                <th  scope="col"><div className="d-flex align-items-center"><strong>Symbol</strong></div></th>
                <th scope="col"><strong>Name</strong></th>
                <th scope="col"><strong> Stock Exchange</strong></th>
                <th scope="col"><strong>Stock Exchange(MIC)</strong> </th>
                <th scope="col"><strong>Country</strong> </th>
               
              </tr>
            </thead>
             {Markets.filter((market,index)=>{
               if(search ==""){
                 return market
               }else if(market.new_data[0].name.toLowerCase().includes(search.toLowerCase())){
                return market
               }
               

             }).map((market,index)=>{  return(<>           
            <tbody>
              <tr>
                <th>{index+1}</th>
                <td>{market.new_data[0].symbol}</td>
                <td>{market.new_data[0].name}</td>
               
                <td>{market.new_data[0].stock_exchange.name}</td>
                <td>{market.new_data[0].stock_exchange.mic}</td>
                <td>{market.new_data[0].stock_exchange.country}</td>
              </tr>




            </tbody></>)})}
          
          
          
          
          
          
          
          
          
          
          
          
          
       
           
          </table> 
          
       {search !==""?<div></div>:<> {LoadMore2 == false ?(null):(<button  className ="btn btn-primary btn-sm mx-auto d-block" onClick={MarketsFun}>Load More</button>)}</>  }  
         
          
          </> 
                
                   
               
              }
 

            
                 
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <PageFooter />


    </React.Fragment>


  )
}
export default Report