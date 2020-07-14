import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { getPost, deletePost } from '../../services/posts'

import './PostDetail.css'

export default class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                title: '',
                content: '',
                imgURL: ''
            }
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const post = await getPost(id)
        this.setState({ post })
    }

    render() {
        const { post } = this.state
        return (
            <Layout>
                <div className='post-detail'>
                    <img className='post-detail-img' src={post.imgURL} />
                    <div className='detail'>
                        <div className='title'>{post.title}</div>
                        <div className='author'>{post.author}</div>
                        <div className='content'>{post.content}</div>
                        <div className='date'>{post.date}</div>
                        <div className='button-container'>
                            <button className='edit-button'>
                                <Link className='edit-link' to={`/posts/${post._id}/edit`}>Edit</Link>
                            </button>
                            <button className='delete-button' onClick={() => deletePost(post._id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}