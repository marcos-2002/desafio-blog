import { useEffect } from 'react'
import {useState} from 'react'
import { ModalStyle } from "../layout/Modal.style";
import { BlogContentStyle } from '../layout/BlogContent.style';


function Home({className}){

    const [blogs, setBlogs] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/blogs', {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then((res) => res.json())
        .then((data) => {
            setBlogs(data)
        })
        .catch((err) => console.log('Erro ao carregar blogs de usuários: ' + err))
    }, [])

    function handleModal(blog){
        setShowModal(true)
        setBlog(blog)
    }

    if(blogs){
        return (
            <div className={className}>
                {blogs.map((blog) => (
                    <div key={blog.id} className='blogs'>
                        <h2 className='h2Blog'>{blog.title}</h2>
                        <p className='pBlog'>{blog.content}</p>
                        <button className='buttonBlog' onClick={() => handleModal(blog)}>Ver blog</button>
                    </div>
                ))}
                {blog && showModal && (
                    <div className='modal'>
                    <ModalStyle isOpen={showModal} className='modal'>
                        <BlogContentStyle title={blog.title} content={blog.content} email={blog.emailUser} isClosed={()=>setShowModal(false)}/>
                    </ModalStyle>
                </div>
                )}
            </div>
        )
    }
}

export default Home