import React, {useState} from 'react'

export default function ResearchEditForm(props) {

    const [research, setResearch] = useState(props.research)

  const handleChange = (event) => {
    const attributeToChange = event.target.name
    const newValue = event.target.value

    const updatedResearch = {...research}
    updatedResearch[attributeToChange] = newValue
    console.log(updatedResearch)
    setResearch(updatedResearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editResearch(research);
  }


  return (
    <div>
    <h1>Edit Research</h1>

    <form onSubmit={handleSubmit}>
        <div>
            <label>Research Topic</label>
            <input type="text" name="researchSubject" onChange={handleChange} value={research.researchSubject}></input>
        </div>

        <div>
            <label>Author</label>
            <input type="text" name="author" onChange={handleChange} value={research.author}></input>
        </div>

        <div>
            <label>Date of Publish</label>
            <input type="date" name="dateofpublish" onChange={handleChange} value={research.dateofpublish}></input>
        </div>

        <div>
            <label>Research Introduction</label>
            <textarea name="researchIntro" onChange={handleChange} value={research.researchIntro}></textarea>
        </div>

        <div>
            <label>Type of Research</label>
            <select name="categories" onChange={handleChange} value={research.categories}>
                <option>Descriptive Research</option>
                <option>Experimental Research</option>
                <option>Exploratory Research</option>
                <option>Historical Research</option>
            </select>
        </div>

        <div>
            <input type="submit" value="Update Research"></input>
        </div>
    </form>
</div>
  )
}
