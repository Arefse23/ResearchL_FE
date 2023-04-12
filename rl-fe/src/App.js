import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom"
import Axios from 'axios'
import jwt_decode from 'jwt-decode'
import Signinn from './user/Signinn'
import Signupp from './user/Signupp'
import ResearchList from './research/ResearchList'
import ResearchCreateForm from './research/ResearchCreateForm'
import ResearchEditForm from './research/ResearchEditForm'
import ResearchDetail from './research/ResearchDetail'
import Home from './research/Home'


export default function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({});
  const [researchs, setResearchs] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
    const [currentResearch, setCurrentResearch] = useState("");

  // Navigate
  let navigate = useNavigate()

  useEffect(() => {
    loadResearchList()
    let token = localStorage.getItem("token")
    if(token != null){
      let user = jwt_decode(token)

      if(user){
        setIsAuth(true)
        setUser(user)
      }
      else if (!user){
        localStorage.removeItem("token")
        setIsAuth(false)
      }
    }
  }, [])
  

   
  const loadResearchList = () => {
    Axios.get("research/index")
    .then((response) => {
      console.log(response)
      // State to store the data
      setResearchs(response.data.researchs)
    })
    .catch((err) => {
      console.log("Error Retreiving Authors")
      console.log(err)
    })
}

  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
    .then(res => {
      console.log(res)
      // window.location.href = '/signin'
      navigate('/signin')
    })
    .catch(err => {
      console.log(err)
    })
  }

  
  const addResearch = (research) => {
    Axios.post("research/add", research,
    {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
    )
    .then(res => {
        console.log("Research Added Successfully!!!")
        loadResearchList();
        // navigate('/index')
    })
    .catch(err => {
        console.log("Error Adding Research")
        console.log(err)
    })
}




const editView = (id) => {
  console.log(id)
  Axios.get(`research/edit?id=${id}`,
  {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
  })
  .then(res => {
      console.log("data", res.data)
      console.log(res.data.research)
      let research = res.data.research
      console.log("Loaded Research Information")
      setIsEdit(true)
      setCurrentResearch(research)
  })
  .catch(err => {
      console.log("Error Loading Research Information")
      console.log(err)
  })

  let path = "/rl-fe"
  navigate(path)
  console.log("EDITNAV")
}


const researchDetail = (id) => {
  console.log(id)
  Axios.get(`research/detail?id=${id}`,
  {
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
      }
  })
  .then(res => {
      console.log("data", res.data)
      console.log(res.data.research)
      let research = res.data.research
      console.log("Loaded Research Detail Information")
      
      setCurrentResearch(research)
  })
  .catch(err => {
      console.log("Error Loading Research Detail Information")
      console.log(err)
  })
}



// const editNav = () => {
//   let path = "/rl-fe"
//   navigate(path)
//   console.log("EDITNAV")
// }


  const loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(res => {
      console.log(res.data.token)
      // Save the token into Local Storage
      let token = res.data.token
      if(token != null){
        localStorage.setItem("token", token)
        let user = jwt_decode(token);
        setIsAuth(true)
        setUser(user)
        // window.location.href = '/'
        navigate('/')
      }
    })
    .catch(err => {
      console.log(err)
      setIsAuth(false)
    })
  }

  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    setIsAuth(false)
    setUser(null)
  }


  return (
    <div>
          <div>
          <nav class="navbar navbar-dark bg-dark" id='navvv'>
              
              <div className='subnav'>
                  <Link to='/'>
                    <button class="btn btn-success" type="button" id='logo'>
                      RL
                    </button>
                    <h3>Research Library</h3>
                  </Link>

                    <button class="btn btn-light" type="button" id='greet'>
                      Welcome in Research Library
                    </button>
                
            
              {
                isAuth?
                  (
                    <>
                    <Link to="/index"className='llink'><button id='but' class="btn btn-outline-success right" type="button">Researches</button></Link> &nbsp;
                    <Link to="/createresearch" onClick={''}className='llink'>
                    <button class="btn btn-outline-primary" type="button">
                      Create Research
                    </button>
                    </Link>

                    <Link to="/logout" onClick={onLogoutHandler}className='llink'>
                    <button class="btn btn-outline-danger" type="button" id='loog'>
                      Logout
                    </button>
                    </Link>
                    </>
                  )
                  :(
                    <>
                      <Link to="/signup" className='llink'>
                      <button class="btn btn-outline-primary" type="button" id='appsignup'>
                        Signup
                      </button>
                      </Link> &nbsp;

                      <Link to="/signin" className='llink'>
                      <button class="btn btn-outline-primary" type="button">
                        Signin
                      </button>
                      </Link> &nbsp;
                    </>
                  )}
              
                
              </div>
            </nav>
          </div>

          <div>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path="/index" element={
                isAuth ? 
                <ResearchList/> 
                : 
                <Signinn login={loginHandler}></Signinn>}>
              </Route>

              <Route path="/signup" element={<Signupp register={registerHandler} />}></Route>
              <Route path="/createresearch" element={<ResearchCreateForm register={registerHandler} addResearch={addResearch}/>}></Route>
              <Route path="/researchedit" element={<ResearchEditForm register={registerHandler} editResearch={editView}/>}></Route>
              <Route path="/researchdetail" element={<ResearchDetail register={registerHandler} researchDetail={researchDetail}/>}></Route>

              <Route path="/signin" element={
                isAuth ? 
                <ResearchList/>
                : 
                <Signinn login={loginHandler}></Signinn>}>
              </Route>
            </Routes>
          </div>
    </div>
  )
}
