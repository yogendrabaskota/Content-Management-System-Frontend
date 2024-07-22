//import React from 'react'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  const [blogs,setBlogs] = useState([])
  const fetchBlogs  = async () => {
    try {
      const response = await axios.get('http://localhost:2000/blogs')
      setBlogs(response.data.blogs)
      
    } catch (error) {      
      alert("something is wrong")
    }

  }
  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <>
    <Navbar />
    <div className="card" style={{width : "18rem"}}>
  {blogs.map((blog)=>{
    return(
      <div key={blog._id} className="card-body">
      <h5 className="card-title"> {blog.title}</h5>
      <h5 className="card-titlse">{blog.subTitle}</h5>
      <p className="card-text">{blog.description}</p>
       <Link to={`/singleBlog/${blog._id}`}> See More </Link>
    </div>
    )}) 
  }
      </div>
    



    </>
  )
}
export default Home