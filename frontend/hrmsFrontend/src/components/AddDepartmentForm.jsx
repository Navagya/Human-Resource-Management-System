
import React , {useState} from "react";

function AddDepartmentForm({onAdd}){
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name.trim()) return alert("Department name is required");
        onAdd(name,description);
        setName("");
        setDescription("");
    };

    return(
        <form 
        onSubmit={handleSubmit}
        className="flex gap-3 mb-6 bg-zinc-800 p-3 rounded"
        >
            <input 
            type="text"
            placeholder="Enter department name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="flex-1 p-2 rounded-md text-black"
             />

             <input
              type="text"
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex-1 p-2 rounded-md text-black"
            />
            
             <button
             type="submit"
             className="bg-green-600 px-4 py-2 rounded-md text-white"
             >
                Add Department
             </button>
        </form>
    ) ;
    
}

export default AddDepartmentForm;