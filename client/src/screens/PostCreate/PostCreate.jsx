import React, { Component } from 'react'
import './PostCreate.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from "../../services/posts"

class PostCreate extends Component {
  constructor() {
    super()
    this.state = {
        post: {
            title: '',
            author: '',
            imgURL: '',
            content: '',
            date: ''
        },
        created: false
    }
  }
  
    
  handleChange = (event) => {
    const { title, value } = event.target
    this.setState({
      post: {
        ...this.state.post,
        [title]: value
      }
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(this.state.post)
    this.setState({ created })
  }

  render() {
    const { post, created } = this.state
    
    if (created) {
      return <Redirect to={`/products`} />
    }
  return(
    <Layout>
      <form className="create-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input-name"
                        placeholder='Name'
                        value={post.title}
                        name='title'
                        required
                        autoFocus
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-author"
                        placeholder='Author'
                        value={post.author}
                        name='author'
                        required
                        onChange={this.handleChange}
                    />
                    <textarea
                        className="textarea-content"
                        rows={10}
                        placeholder='Content'
                        value={post.content}
                        name='content'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                    className="input-date"
                    placeholder='Date'
                    value={post.date}
                    name='date'
                    required
                    onChange={this.handleChange}
                />
        </form>
    </Layout>
    )
  }
}

export default PostCreate
