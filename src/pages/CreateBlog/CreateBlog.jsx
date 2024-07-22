import Navbar from '../../Components/Navbar/Navbar'
import './CreateBlog.css'
const CreateBlog = () => {
  return (
    <>
    <Navbar />
    <div className="form-container">
    <form>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div className="form-group">
        <label htmlFor="subtitle">Subtitle</label>
        <input type="text" id="subtitle" name="subtitle" required />
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