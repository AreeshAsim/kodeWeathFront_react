import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"
import ReactPlayer from 'react-player';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import PageHeader from "../../../components/page-header";
import ChangeTitle from "../../../components/change_page_title";
import PageFooter from "../../../components/page-footer";
import SideBar from "../../../components/side-bar";
import BreadCrumb from "../../../components/bread-crumb";
import './manage-courses.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ReactPaginate from 'react-paginate';



function ManageCourses() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  //master class state...
  const [courses, showCourses] = useState({ offset: 0, tableData: [], orgTableData: [], perPage: 5, currentPage: 0 });
  //free class state...
  const [freeCourses, FreeCourses] = useState({ offset: 0, tableDatafree: [], orgTableDatafree: [], perPage: 5, currentPage: 0 });
  const [bool, setbool] = useState();
  
 
  
  const handlePagination = (e) => {

    const selectedPage = e.selected
    const data = courses.orgTableData


    const offset = selectedPage * courses.perPage
    console.log(offset);
    const slice = data.slice(offset, offset + courses.perPage)
    console.log(slice);

    var newdata = { ...courses }
    newdata.tableData = slice

    showCourses(newdata)
  }

  const handlePaginationfree = (e) => {

    const selectedPage = e.selected
    const data = freeCourses.orgTableDatafree


    const offset = selectedPage * freeCourses.perPage
    console.log(offset);
    const slice1 = data.slice(offset, offset + freeCourses.perPage)
    console.log(slice1);

    var newdata = { ...freeCourses }
    newdata.tableDatafree = slice1

    FreeCourses(newdata)
  }

  const searchData = (e)=>{


    handleSearch(e.target.value)
  
    
  
  }
 

 //To Set Inputdata in search field

  const searchDataFree = (e)=>{


    // setSearch1(e.target.value)
    handleSearchFree(e.target.value)
  
    
  
  }












  useEffect(() => {
    axios.get(`${BASE_URL}/show/courses`).then((res) => {
      const datamaster = res.data.filter(course => course.courseplan === 'master').reverse();
      const slice = datamaster.slice(courses.offset, courses.offset + courses.perPage)
      showCourses({
        pageCount: (datamaster.length / courses.perPage),
        orgTableData: datamaster,
        tableData: slice,
        offset: 0,
        perPage: 5,
      })

      const datafree = res.data.filter(course => course.courseplan === 'free').reverse();
      const slice1 = datafree.slice(freeCourses.offset, freeCourses.offset + freeCourses.perPage)

      FreeCourses({
        pageCount: (datafree.length / freeCourses.perPage),
        orgTableDatafree: datafree,
        tableDatafree: slice1,
        offset: 0,
        perPage: 5,
      })







    }).catch((err) => {
      showCourses({
        pageCount: "",
        orgTableData: [],
        tableData: [],
        offset: "",
        perPage: "",
      })
      FreeCourses({
        pageCount: "",
        orgTableDatafree: [],
        tableDatafree: [],
        offset: "",
        perPage: "",
      })





    })


  }, [bool])


  const deleteCourses = (id) => {

    axios
      .delete(`${BASE_URL}/remove/course/` + id)
      .then((res) => {


        setbool(!bool)



      });


  };

  const    handleSearch = (text) =>{

    console.log(text);
    const data = courses.orgTableData
    
  
      const coursedata = data.filter(course => course.title.toLowerCase().includes(text.toLowerCase()) || course.category.toLowerCase().includes(text.toLowerCase())) 
    
    var newdata = {...courses}
    newdata.tableData = coursedata
  
    
  
  
    showCourses(newdata)
  
  
 }


 const    handleSearchFree = (text) =>{

  console.log(text);
  const data = freeCourses.orgTableDatafree
  const freedata = data.filter(freecourse => freecourse.title.toLowerCase().includes(text.toLowerCase()) || freecourse.category.toLowerCase().includes(text.toLowerCase())) 
  

     
  
  var newdata = {...freeCourses}
  newdata.tableDatafree = freedata

  


  FreeCourses(newdata)


}













  const breadcrumbNavigation = [
    {
      title: "Manage Courses Page",
      link: "#",
    },
    {
      title: "Manage Courses Page",
      link: "#",
    },
  ];



  return (
    <React.Fragment>
      <ChangeTitle title={"Home"} />

      {/*SideBar*/}
      <SideBar />

      {/*Page Header*/}
      <PageHeader />
      <BreadCrumb navigation={breadcrumbNavigation} />
      <section class="pageWrapper">
    
      <ul style={{marginBottom:"5px"}} class="customTabs nav nav-tabs" role="tablist">
											 <li class="nav-item">
												 <a class="nav-link active" data-toggle="tab" href="#master" role="tab">Master Classes</a>
											 </li>
											 <li class="nav-item">
												 <a class="nav-link" data-toggle="tab" href="#free" role="tab">Free Classes</a>
											 </li>
				</ul>
   
      <div class="tab-content">
      <div class="tab-pane active" id="master" role="tabpanel">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">

         
                  
                   
                                        

              <div class="btn_align">

                <Link to="/add-courses">
                  <button className="btn btn-danger">Add Course</button>


                </Link>
              </div>


             

              <div class="contentCard space-between">
            
                <h3 className="heading">Master Classes</h3>
               
                <div class="search-input space-between">
  										<div class="form-outline" >

										  <input type="text" name="name" placeholder="Search" className="form-control" id="exampleFormControlInput1"  onChange={searchData} />
    						              
    						             </div>
 							
								        </div>
              
                

              </div>
            



            </div>
          </div>

          <div class="row">
    
    {courses.tableData.sort((a, b) => (a.category > b.category) ? 1 : -1).map((course, index) => {
              return (<>

                <div class="col-12 col-sm-6 col-md-4 col-lg-4 ">
              
                  <div className="card video_player">
                  {/* <span className="badge badge-primary"> {course.category}</span> */}

                    {/* <ReactPlayer url={`${BASE_URL}/upload/${course.video.replace(/[\\]/g, '/')}`} controls={true} /> */}
                   <a data-toggle="modal" data-target={"#a"+index} ><img className="d-block mx-auto" style={{marginTop:"10px",marginBottom:"10px"}}  src="/assets/images/Crop.jpg" alt=" default image"  height="200px" /></a> 
   
														
														<div class="modal fade" id={"a"+index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
														  <div class="modal-dialog" role="document">
															<div class="modal-content">
															  <div class="modal-header">
															  
																<button type="button" class="close" data-dismiss="modal" aria-label="Close">
																  <span aria-hidden="true">&times;</span>
																</button>
															  </div>
															  <div class="modal-body" style={{padding:"0px"}}>
                                <ReactPlayer url={`${BASE_URL}/upload/${course.video.replace(/[\\]/g, '/')}`} width="100%" height="100%" controls={true} />
															  </div>
															
															</div>
														  </div>
														</div>


                    <div className="card-body managecard-padding">
               
                      <div>
                        <h5 

                          data-toggle="modal"
                          data-target="#exampleModalone"
                        >
                          <ul className="manageUl">
                         
                          <li style={{display:"flex", justifyContent:"space-between",padding:"8px" }}>  <span   class="coursTitle">{course.title}</span> 
                          <span style={{display:"flex", justifyContent:"space-around"}}>
                              <DeleteIcon  style={{color:"red"}} onClick={() => deleteCourses(course._id)} />

                              <Link to={"/course-edit" + course._id} style={{marginLeft:"10px"}}>
                                <EditIcon />
                              </Link>
                            </span>
                          
                          
                          </li> 
                          
                      
                          <li style={{textAlign:"right",paddingRight:"10px"}} ><span className="badge badge-primary"> {course.category}</span></li> 
                          
                          
                            </ul>
                          </h5>


                      </div>
                    </div>
                  </div>
                </div>
              </>)
            })}

      






              <div style={{ marginTop: "20px" }} className="col-lg-12">
                <ReactPaginate
                  previousLabel={<KeyboardArrowLeftIcon />}
                  nextLabel={<KeyboardArrowRightIcon />}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={courses.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePagination}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />

              </div>

            </div>

          </div>
          </div>

         
         
         
          <div class="tab-pane" id="free" role="tabpanel">
          {/* <hr class="style2"></hr> */}
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
              <div class="btn_align"> 

<Link to="/add-courses">
  <button className="btn btn-danger">Add Course</button>


</Link>
</div>
                
          


                <div class="contentCard space-between">

                  <h3 className="heading">Free Classes</h3>

                  <div class="search-input space-between">
  										<div class="form-outline" >

										  <input type="text" name="name" placeholder="Search" className="form-control" id="exampleFormControlInput1"    onChange={searchDataFree} />
    						              
    						             </div>
 							
								        </div>


                </div>



              </div>
            </div>

            <div class="row">





              {freeCourses.tableDatafree.sort((a, b) => (a.category > b.category) ? 1 : -1).map((freecourse, index) => {
                return (<>

                  <div class="col-12 col-sm-6 col-md-4 col-lg-4 ">
                    <div className="card video_player">

                      {/* <ReactPlayer url={`${BASE_URL}/upload/${course.video.replace(/[\\]/g, '/')}`} controls={true} /> */}
                      
                      <a data-toggle="modal" data-target={"#a"+index} ><img  className="d-block mx-auto"  src="/assets/images/Crop.jpg" alt=" default image"  height="200px" /></a> 
   
														
                        <div class="modal fade" id={"a"+index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                       <div class="modal-content">
                     <div class="modal-header">
       
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
             <div class="modal-body" style={{padding:"0px"}}>
               <ReactPlayer url={`${BASE_URL}/upload/${freecourse.video.replace(/[\\]/g, '/')}`} width="100%" height="100%" controls={true} />
             </div>
     
     </div>
     </div>
   </div>



                      <div className="card-body managecard-padding">
                        <div>
                          <h5

                            data-toggle="modal"
                            data-target="#exampleModalone"
                          >

                              <ul className="manageUl">



                     <li style={{display:"flex", justifyContent:"space-between",padding:"8px" }}>  <span   class="coursTitle">{freecourse.title}</span> 
                     <span  style={{display:"flex", justifyContent:"space-around"}}>  
                                <DeleteIcon  style={{color:"red"}} onClick={() => deleteCourses(freecourse._id)} />

                                <Link to={"/course-edit" + freecourse._id} style={{marginLeft:"10px"}}>
                                  <EditIcon />
                                </Link>
                              </span></li> 

                            <li style={{textAlign:"right",paddingRight:"10px"}}><span className="badge badge-primary"> {freecourse.category}</span></li> 
                            </ul>
                            

                          </h5>


                        </div>
                      </div>
                    </div>
                  </div>
                </>)
              })}






              <div style={{ marginTop: "20px" }} className="col-lg-12">
                <ReactPaginate
                  previousLabel={<KeyboardArrowLeftIcon />}
                  nextLabel={<KeyboardArrowRightIcon />}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={freeCourses.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePaginationfree}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />

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

export default ManageCourses