import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const UpdateBlog = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const[blog,setBlog] = useState({})


    

    const handleChange = (e) => {
        const{name,value} = e.target
        setBlog({
            ...blog,
            [name] : value
        })
    }

    const updateBlog = async(e) =>{
        e.preventDefault()
        const response = await axios.patch("http://localhost:2000/blogs/" + id,blog)
        if(response.status == 200){
            navigate("/singleBlog/" + id)
        }
    }

    const fetchSingleBlog = async() =>{
        const response = await axios.get("http://localhost:2000/blogs/" + id)
        if(response.status == 200){
            setBlog(response.data.data)
        }
    }

    useEffect(()=>{
        fetchSingleBlog()
    },[])
 



  return (
    <>
    
    <div className="form-container">
        <h2>Update Blog</h2>
    <form onSubmit={updateBlog}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" value={blog.title} onChange={handleChange} id="title" name="title" required />
      </div>
      <div className="form-group">
        <label htmlFor="subtitle">Subtitle</label>
        <input type="text" value={blog.subTitle} onChange={handleChange} id="subTitle" name="subTitle" required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" value={blog.description} onChange={handleChange} name="description" rows="4" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
    
    </>
  )
}

export default UpdateBlog