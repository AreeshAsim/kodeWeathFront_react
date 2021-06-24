import React, { useState,useEffect } from 'react'
//component
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import $ from 'jquery';


//Other Dependenies
import axios from "axios"

// import ReactHTMLParser from 'react-html-parser';


export default function EditTag({match}) {

    const BASE_URL = process.env.REACT_APP_BASE_URL;
  

     const [showData,setShowData] =useState("");
    const [tag,setTag] = useState("");
    const [addButton,setAddButton] = useState(true);
    const [error, setError] = useState("")



    /* onChange Function */

    const inputHandleTag = (e) => {

        setTag(e.target.value)
    }
   


    useEffect(() => {

       
            

        axios.get(`${BASE_URL}/singletag/`+match.params.id).then((res)=>{
           setTag(res.data[0].tagname);
          })
   
 
 
 }, [])

     const editTag = (e) => {
        e.preventDefault();
       
        if(tag==""){

            setError("Please Fill Tag Field")

        }
        else{
          
            $("#loader").removeClass('display');
       
       
        const data ={
          
            tagname:tag

        }
        axios
        .post(`${BASE_URL}/update/tag/` + match.params.id,data)
        .then((res) => {

            
            console.log(res.data.status);
            setError("");
            setAddButton(false)
            // setShowData(res.data.status);
             setShowData("Data Update Successfully");
            $("#loader").addClass('display');	
            setTimeout(() => {
                setAddButton(true);
                setShowData("")
    
                
            }, 2000);
           
            // setbool(!bool)
}).catch((err)=>{
    $("#loader").addClass('display');	
    
  
    setShowData("");
      console.log(err);
      setAddButton(false);
      setError("Data Not updated");
      setTimeout(() => {
        setAddButton(true);
        setShowData("")

        
    }, 2000);


})
        }
    
    }
    const breadcrumbNavigation = [
        {
            title: 'Edit Tag Page',
            link: '#'
        },
        {
            title: 'Edit Tag Page',
            link: '#'
        }
    ]




    return (
        <div>
           
        
           
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

                        <form onSubmit={editTag} >
                            <div class="row">
                                <div class="col-7">
                                     {error ? (<div class="alert alert-warning alert-dismissible show" role="alert">
                                        <strong>{error}</strong></div>) : (null)}
                                     
                                     {showData ? (<div class="alert alert-success alert-dismissible show" role="alert">
                                        <strong>{showData}</strong></div>) : (null)}


                                    <div class="contentCard ">
                                        <h3 className="heading">Basic Information</h3>
                                    </div>




                                    <div class="contentCard">

                                        <div class="cardBody">

                                            <div className="form-group formWrapper">
                                                <label htmlFor="exampleFormControlInput1">Tag Name</label>
                                                <input type="text" name="tag" className="form-control" id="exampleFormControlInput1" value={tag} onChange={inputHandleTag} />
                                            </div>
                                            <div id={"loader"} className={'display'}>Loading</div>
                                          
                                        </div></div>
                                        {/* {addButton == false? (<button className=" btn btn-primary btn-sm">update Tag</button>):(<button className=" btn btn-danger btn-sm " onClick={()=>setAddButton(false)}>Add Tag</button>)} */}
                               
                                       {addButton == false? (<button type="submit" className=" btn btn-danger btn-sm">Update Tag</button>):(<button type="submit" className=" btn btn-primary btn-sm">Update Tag</button>)}
                               
                                </div>
                               

                            </div>
                        </form>
                    </div>
                </section>
                <PageFooter />
            </React.Fragment>

        </div>

    )
}
