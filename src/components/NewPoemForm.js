import React, {useState} from "react";

function NewPoemForm({ setPoems}) {
const [form, setForm] = useState({title: '', content: '', author: ''})


  return (
    <form className="new-poem-form" onSubmit={ async(event) => {
      event.preventDefault()
      let req = await fetch('http://localhost:8004/poems', {
        method: "POST",
        headers:{'Content-Type': 'applications/json'},
        body:JSON.stringify(form)
      })
        let res = await req.json()
         setPoems((prevState) => [...prevState, res])
      }}>

                                                                                                      
      <input type="text" name="title" placeholder="title" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})}/>
      <input type="text" placeholder="Author" value={form.author} onChange={(e) => setForm({...form, author: e.target.value})}/>
      <textarea placeholder="Write your masterpiece here..." rows={10} value={form.description} onChange={(e) => setForm({...form, description: e.target.value})}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}  




export default NewPoemForm;
