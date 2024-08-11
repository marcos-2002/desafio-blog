import { useEffect, useState } from "react"

function BlogContent({className, title, content, email, isClosed}){

    const [author, setAuthor] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: "GET",
            headers: {'Content-type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
            data.map((dat) => {
                if(dat.email === email){
                    setAuthor(dat)
                }
            })
        })
    })

    return (
        <div className={className}>
            {author && (
                <div>
                    <h2>{title}</h2>
                    <h3>Autor: {author.name}</h3>
                    <p>{content}</p>
                    <button onClick={isClosed}>x</button>
                </div>
            )}
        </div>
    )
}

export default BlogContent