import axios from 'axios'
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from '../../Components/Navbar/Navbar'

const SingleBlog = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const[blog,setBlog] =useState({})
    //delete blog 
    const deleteBlog =async ()=>{
        const response = await axios.delete("http://localhost:2000/blogs/" + id)
        if(response.status == 200){
            alert("blog deleted successfully")
            navigate("/")
        }
    }


    // fetch single blog
    const fetchSingleBlog = async() =>{
        const response = await axios.get("http://localhost:2000/blogs/" + id)
        if(response.status == 200){
            setBlog(response.data.data)
        }
    }

    useEffect(()=>{
        fetchSingleBlog()
    })

  return (
    <>
    <Navbar />
    <center>
    <h1>{blog.title}</h1>
    <h3>{blog.subTitle}</h3>
    <h3>{blog.description}</h3>
    </center>
    <button onClick={deleteBlog}>Delete</button>

    <button><Link to={`/update/${blog._id}`}>Update</Link></button>
    
    </>
  )
}

export default SingleBlog