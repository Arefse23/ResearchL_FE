import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Research from './Research';
import ResearchCreateForm from './ResearchCreateForm';
import ResearchEditForm from './ResearchEditForm';

export default function ResearchList() {

    const [researchs, setResearchs] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [currentResearch, setCurrentResearch] = useState("");

    useEffect(() => {
        loadResearchList()
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


    const editResearch = (research) => {
        Axios.put("research/update", research,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log("Research Updated Successfully!!!")
            console.log(res);
            loadResearchList();
        })
        .catch( err=> {
            console.log("Error Editing Research")
            console.log(err)
        })
    }

    const deleteResearch = (id) => {
        Axios.delete(`research/delete?id=${id}`,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log("Record Delete Successfully!!!")
            console.log(res)
            loadResearchList();
        })
        .catch(err => {
            console.log("Error Deleting Research")
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
        })
        .catch(err => {
            console.log("Error Adding Research")
            console.log(err)
        })
    }
    
    


    const allresearchs = researchs.map((research, index) => (
        <tr key={index}>
            <Research {...research} editView={editView} deleteResearch={deleteResearch} researchDetail={researchDetail}/>
        </tr>
    ))

  return (
    <div>
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Topic</th> &nbsp;
                        <th>Author</th> &nbsp;
                        <th>Category</th> &nbsp;
                        
                    </tr>
                    {allresearchs}
                </tbody>
            </table>
        </div>
        {(!isEdit) ?
        console.log()// <ResearchCreateForm addResearch={addResearch}/>
            :
        <ResearchEditForm key={currentResearch._id} research={currentResearch} editResearch={editResearch}/>
        }
    </div>
  )
}
