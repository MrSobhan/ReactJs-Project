import React, { useEffect, useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';

const App = () => {

    const [posts, setPosts] = useState([])
    const [currentPost, setCurrentPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageNumber, setPageNumber] = useState([])

    let pageSize = 20

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(datas => {
                setPosts(datas)

                let pageCount = Math.ceil(datas.length / pageSize)
                setPageNumber(Array.from(Array(pageCount).keys()))

            })
    }, [])

    useEffect(() => {
        let endIndex = currentPage * pageSize
        let firstIndex = endIndex - pageSize

        setCurrentPost(posts.slice(firstIndex, endIndex))
    }, [currentPage, pageNumber])

    const changePage = (id) => {
        setCurrentPage(id)
    }

    return (
        <div className="container-fluid">
            <div className="table-responsive">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">userId</th>
                            <th scope="col">id</th>
                            <th scope="col">title</th>
                            <th scope="col">body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentPost.map((post) => (
                                <tr key={post.id}>
                                    <th scope="row">{post.userId}</th>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>@{post.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <center>
                <div className="btn-group my-4" role="group" aria-label="First group">
                    {
                        pageNumber.map((num) => (
                            <button type="button" key={num + 1} className={`${currentPage == num + 1 ? 'active' : ''} btn btn-outline-dark`} onClick={() => changePage(num + 1)}>{num + 1}</button>
                        ))
                    }
                </div>
            </center>
        </div>
    );
}

export default App;