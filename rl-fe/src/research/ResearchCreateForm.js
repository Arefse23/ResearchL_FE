import React, {useState} from 'react'

export default function ResearchCreateForm(props) {

    const [newResearch, setNewResearch] = useState({})


  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const research = {...newResearch}
    research[attributeToChange] = newValue
    console.log(research)
    setNewResearch(research)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addResearch(newResearch);
  }

  return (
    <div>
    <h1>Create Research</h1>

    <form onSubmit={handleSubmit}>
        <div>
            <label>Research Topic</label>
            <input type="text" name="researchSubject" onChange={handleChange}></input>
        </div>

        <div>
            <label>Author</label>
            <input type="text" name="author" onChange={handleChange}></input>
        </div>

        <div>
            <label>Date of Publish</label>
            <input type="date" name="dateofpublish" onChange={handleChange}></input>
        </div>

        <div>
            <label>Research Introduction</label>
            <textarea name="researchIntro" onChange={handleChange}></textarea>
        </div>

        <div>
            <label>Type of Research</label>
            <select name="categories" onChange={handleChange}>
                <option>Descriptive Research</option>
                <option>Experimental Research</option>
                <option>Exploratory Research</option>
                <option>Historical Research</option>
            </select>
        </div>

        <div>
            <input type="submit" value="Add Research" ></input>
        </div>
    </form>
</div>
  )
}
