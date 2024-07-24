import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './CreateBlog.css'
import axios from 'axios'
const CreateBlog = () => {
    const navigate = useNavigate()

    const createBlog = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget) 
        const data = Object.fromEntries(formData)


        //send above data to api
        const response = await axios.post("http://localhost:2000/blogs",data)
        if(response.status == 201){
            alert(response.data.message)
            navigate("/")
        }else{
            alert("something went wrong")
        }


    }

  return (
    <>
    <Navbar />
      <div className="form-container">
        <h2>Create Blog</h2>
        
    <form onSubmit={createBlog}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div className="form-group">
        <label htmlFor="subtitle">Subtitle</label>
        <input type="text" id="subTitle" name="subTitle" required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="4" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    
      </div>

    </>
  )
}

export default CreateBlog