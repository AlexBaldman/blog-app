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
                author: '',
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
                <div>
                </div>
            </Layout>
        )
    }
}
