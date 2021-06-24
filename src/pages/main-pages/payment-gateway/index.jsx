import React from 'react'
import PageHeader from '../../../components/page-header';
import ChangeTitle from '../../../components/change_page_title';
import PageFooter from '../../../components/page-footer';
import SideBar from '../../../components/side-bar';
import BreadCrumb from '../../../components/bread-crumb';

 function PaymentGateway() {
   
  const  breadcrumbNavigation = [
		{
			title: 'Payment Gatway Page',
			link: '#'
		},
		{
			title: 'Payment Gateway page',
			link: '#'
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

				{/* <section class="pageWrapper">
					<div class="container-fluid">
						<div class="row">
							<div class="col-12">
								<div class="contentCard">
									<div class="cardHeader clearfix">
									
									</div>
									<div class="cardBody">
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
               
                <PageFooter />


            </React.Fragment>
            
        
    )
}
export default PaymentGateway