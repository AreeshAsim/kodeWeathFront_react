import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";


 /*========================= UserLogin ==============================*/
 
 import Login from './pages/user-ragistration/login'
 import Ragistration from './pages/user-ragistration/ragistration'
 /*========================= END ==============================*/
 
 
 
 /*===================== Main ======================*/
 import Report from './pages/main-pages/report';
 import PaymentGateway from './pages/main-pages/payment-gateway';
 import OrderManagement from './pages/main-pages/order-mangement';
 
 /*========================= END ==============================*/
 
 
 /*===================== Subscription MANAGEMENT ======================*/
 import AddSubscription from './pages/subscription-management/add-subscription'
 import ListSubscription from './pages/subscription-management/list-subscription/index.jsx'
 import EditSubscription from './pages/subscription-management/edit-subscription/index'
 
 /*========================= END ==============================*/
 
 /*===================== TAGS MANAGEMENT ======================*/
 import AddTag from './pages/tag-management/add-tag';
 import ListTags from './pages/tag-management/list-tag';
 import EditTag from './pages/tag-management/edit-tag/edit';
 /*========================= END ==============================*/

 /*===================== DISCOUNT MANAGEMENT ======================*/
 import AddDiscount from './pages/discount-management/add-discount';
 import ListDiscount from './pages/discount-management/list-discount';
 import EditDiscount from './pages/discount-management/edit-discount/edit';
 /*========================= END ==============================*/
 
 
 /*===================== USERS MANAGEMENT ======================*/
 import AddUser from './pages/users/add-user';
 import ListUsers from './pages/users/list-users';
 /*========================= END ==============================*/
 
 /*===================== VIDEO MANAGEMENT ======================*/
 
 import AddCourse from './pages/video-management/add-course';
 import AddLesson from './pages/video-management/add-lesson';
 
 import ManageCourse from './pages/video-management/manage-courses';
 import ListCategories from './pages/video-management/manage-categories';
 import AddCategory from './pages/video-management/add-category';
 import EditCategory from './pages/video-management/edit-category/edit';
 import  ManageLesson from './pages/video-management/mange-lesson'
 import EditCourses from './pages/video-management/edit-course'
 
 /*========================= END ==============================*/
  /*===================== 404 PAGE ======================*/
  import Client404 from './pages/404/notfound';


  require('dotenv').config()
function App() {

    const id = sessionStorage.getItem("id") || ""
    // console.log("app2222")
    console.log(id)
    if(id==""){
        return <Login/>
    }
  else{
 
    return (
    <Router>
    <Switch>
        {/*=========================================================*/}

        {/*==================== User Login ===================*/}


      
        <Route exact path="/ragistration" component={Ragistration}></Route>

        {/*==================== Subscription ===================*/}
        <Route exact path="/add-subscription" component={AddSubscription} />
        <Route exact path="/list-subscription" component={ListSubscription} />
        <Route exact path="/edit-:id" component={EditSubscription} />
    

        {/*==================== Main pages ===================*/}
        <Route exact path="/" component={Report} />
        <Route exact path="/payment-gateway" component={PaymentGateway} />
        <Route exact path="/order-management" component={OrderManagement} />


        {/*==================== USERS MANAGEMENT ===================*/}
        <Route exact path="/add-users" component={AddUser} />
        <Route exact path="/list-users" component={ListUsers} />

        {/*==================== TAGS MANAGEMENT ===================*/}
        <Route exact path="/add-tags" component={AddTag} />
        <Route exact path="/list-tags" component={ListTags} />
        <Route exact path="/tag-edit:id" component={EditTag} />

        
        {/*==================== DISCOUNT MANAGEMENT ===================*/}
        <Route exact path="/add-discount" component={AddDiscount} />
        <Route exact path="/manage-discount" component={ListDiscount} />
        <Route exact path="/discount-edit:id" component={EditDiscount} />



        {/*==================== VIDEO MANAGEMENT ===================*/}

        <Route exact path="/add-courses" component={AddCourse} />
        <Route exact path="/add-lesson" component={AddLesson} />
        <Route exact path="/manage-lesson" component={ManageLesson} />

        <Route exact path="/manage-courses" component={ManageCourse} />
        <Route exact path="/manage-categories" component={ListCategories} />
        <Route exact path="/add-category" component={AddCategory} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/category-edit:id" component={ EditCategory } />
        <Route exact path="/course-edit:id" component={EditCourses} />

        {/*======================= CLIENT 404 ========================*/}
        <Route component={Client404} />
    </Switch>
</Router>

  );
}
}

export default App;