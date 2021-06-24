/**
 * @author Basit Raza <razabasit88@gmail.com>
 * @link http://be.net/basit_raza Author Website
 * @since 2021-01-18
 */
import React,{useState} from 'react';
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import axios from "axios";
import $ from 'jquery';
// import './adduser.css'

export default function AddTag() {
  const [tag,setTag] = useState("");
   const [addButton,setAddButton] = useState(true);
   const [error, setError] = useState("")
  const [showdata, setSubmitData] = useState("");
    const addTag= (e)=>{
        const BASE_URL = process.env.REACT_APP_BASE_URL;
        const SUCCESS = process.env.REACT_APP_SUCCESS;
        const ERORR =  process.env.REACT_APP_ERROR;
    


      e.preventDefault();


if(tag== ""){
    setError("Please Fill Tag Field")
}	

else{
    $("#loader").removeClass('display');
    

    setError("")

    const data={
             
            tagname:tag,

        }

       axios.post(`${BASE_URL}/create/tag`,data).then((res)=>{
               
                      console.log(res.data);
                      $("#loader").addClass('display');	

       })
       setSubmitData("Data Submit Successfully");
         setAddButton(false);

         setTimeout(() => {
            setAddButton(true);
      setSubmitData("")

            
        }, 2000);
    }
    
}
const resetForm = ()=>{
		setTag("");
		setSubmitData("")
		setError("");
        setAddButton(true);
    }
   const breadcrumbNavigation = [
        {
            title: 'AddTag Page',
            link: '#'
        },
        {
            title: 'AddTag Page',
            link: '#'
        }
    ]




    return (
        /*Content Area*/
        <React.Fragment>

            <ChangeTitle title={'Home'} />

            {/*SideBar*/}
            <SideBar />

            {/*Page Header*/}
            <PageHeader />

            <BreadCrumb navigation={breadcrumbNavigation} />

            {/* main content starts here */}



            <section class="pageWrapper">
                <div class="col-8">
            {error ? (<div class="alert alert-warning alert-dismissible show" role="alert">
											<strong>{error}</strong></div>) : (null)}
										{showdata ? (<div class="alert alert-success alert-dismissible show" role="alert">
											<strong>{showdata}</strong></div>) : (null)}
                                 </div>
                <div class="container-fluid">
                    <div class="row">
                      <div class="col-8"  >
                            <div class="contentCard">
                                <form onSubmit={addTag}>
                                    <div className="form-group formWrapper">
                               
                                                                        
                                        <label htmlFor="exampleFormControlInput1">Tag Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"  onChange={(e)=>setTag(e.target.value)}/>
                                    </div>
                                    <div id={"loader"} className={'display'}>Loading</div>
                                  
                                 {addButton? (<button className=" btn btn-primary btn-sm">Add Tag</button>):(<button className=" btn btn-danger btn-sm " onClick={()=>setAddButton(false)}>Add Tag</button>)}
                                 <button type="reset" style={{marginLeft:"20px"}} className="btn btn-primary btn-sm" onClick={resetForm}>Reset</button> 

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PageFooter />
        </React.Fragment>

    )
}
