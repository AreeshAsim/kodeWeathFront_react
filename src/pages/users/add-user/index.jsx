import React, { useState } from 'react';
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';
import axios from "axios"
import './adduser.css'
import $ from 'jquery';

function AddUsers() {
	const BASE_URL = process.env.REACT_APP_BASE_URL;
	const SUCCESS = process.env.REACT_APP_SUCCESS;
	const ERORR =  process.env.REACT_APP_ERROR;


	const [user, setUsers] = useState({ name: "", email: "", contact: "", date: "" ,password:"",cpassword:"" })
	const [error, setError] = useState("")
	const [showdata, setSubmitData] = useState("");
	const [addButton, setAddButton] = useState(true);
	const inputFieldHandle = (e) => {

		const name = e.target.name;
		const value = e.target.value;
		console.log(name)
		console.log(value)
		setUsers({ ...user, [name]: value })

	}

	
	const resetForm = ()=>{
		setUsers({name:"",email:"",contact:"",date:"",password:"",cpassword:""});
		setAddButton(true);
		setError("");
		setSubmitData("");

	}
		const addUser = (e) => {
		e.preventDefault();

		const { name, email, contact, date, password,cpassword } = user



		 
	
		var dateString = date + ""
		if (name == "") {
			setError("Please Fill  NickName");

		}
		else if (email == "") {
			setError("Please Fill  Email");

		}
		else if (contact == "") {
			setError("Please Fill  Contact");

		}
		else if (dateString == "") {
			setError("Select Date of Birth");
		}
		else if (password == "") {
			setError("Please Fill The Password");
		}
		else if (password !== cpassword) {
			setError("Password And Confrom Password Not Same");
		}
		

		else {
			$("#loader").removeClass('display');
			setError("");
			const userData = {
				nickName: name,
				email_address: email,
				phone_number: contact,
				date_of_birth: date,
				password:password,
				confirmed_password:cpassword
			}

			
			axios.post(`${BASE_URL}/signUp`, userData).then((res) => {
				$("#loader").addClass('display');	

				
				  if(res.data.type ===200){
				// setSubmitData(res.data.status);
				setSubmitData("Data submit Successfully");
				setAddButton(false);
				 
				setTimeout(() => {
					setAddButton(true);
			  setSubmitData("")
		
					
				}, 2000);
			
			}else{

				$("#loader").addClass('display');	
				
					//setSubmitData(error);
					setError("User Already Exit");
						setAddButton(false);	
						setTimeout(() => {
							setAddButton(true);
							setError("")
				
							
						}, 2000);	

			}
			}).catch((error) => {
				$("#loader").addClass('display');	
				console.log(error)	
					//setSubmitData(error);
					setError("Data Not Added");
						setAddButton(false);	
						setTimeout(() => {
							setAddButton(true);
							setError("")
				
							
						}, 2000);	  
			})
		

		}



	}

	const breadcrumbNavigation = [
		{
			title: 'AddUser Page',
			link: '#'
		},
		{
			title: 'AddUser Page',
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





			<section class="pageWrapper">
				<div class="container-fluid">
					<div class="row">


						<div class="col-8"  >

							


							{error ? (<div class="alert alert-warning alert-dismissible show" role="alert">
								<strong>{error}</strong></div>) : (null)}
								{showdata ? (<div class="alert alert-success alert-dismissible show" role="alert">
											<strong>{showdata}</strong></div>) : (null)}	
							<div class="contentCard">
								<form onSubmit={addUser}>

									<div className="form-group formWrapper">
										<label htmlFor="exampleFormControlInput1"> Nick Name</label>
										<input type="text" name="name" value={user.name} onChange={inputFieldHandle} className="form-control" id="exampleFormControlInput1" />
									</div>
									<div className="form-group formWrapper">
										<label htmlFor="exampleFormControlInput1"> Email</label>
										<input type="email" name="email" value={user.email} onChange={inputFieldHandle} className="form-control" id="exampleFormControlInput1" />
									</div>
									<div className="form-group formWrapper">
										<label htmlFor="exampleFormControlInput1"> Contact Number</label>
										<input type="tel" name="contact" value={user.contact} onChange={inputFieldHandle} className="form-control" id="exampleFormControlInput1" />
									</div>
									{/* Loader */}
									<div id={"loader"} className={'display'}>Loading</div>

									<div className="form-group formWrapper">
										<label htmlFor="exampleFormControlInput1"> Date Of Birth</label>
										<input type="date" name="date" value={user.date} onChange={inputFieldHandle} className="form-control" id="exampleFormControlInput1" />
									</div>
									<div className="form-group formWrapper">
										<label htmlFor="exampleFormControlInput1"> Password</label>
										<input type="password" name="password" value={user.password} onChange={inputFieldHandle} className="form-control" id="exampleFormControlInput1" />
									</div>
									<div className="form-group formWrapper">
										<label htmlFor="exampleFormControlInput1"> Confirm Password</label>
										<input type="password" name="cpassword" value={user.cpassword} onChange={inputFieldHandle} className="form-control" id="exampleFormControlInput1" />
									</div>
									
									
									
									{addButton == false ? (<button className=" btn btn-danger btn-sm">Add User</button>):(<button className=" btn btn-primary btn-sm ">Add User</button>)}
                                 <button type="reset" style={{marginLeft:"20px"}} className="btn btn-primary btn-sm" onClick={resetForm}>Reset</button> 

								</form>







							</div>
						</div>
					</div>
				</div>
			</section>




			<PageFooter />
		</React.Fragment>
	);

}

export default AddUsers;

