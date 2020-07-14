import React, { Component } from 'react'
import PostCards from '../../components/PostCards/PostCards'
import Layout from '../../components/shared/Layout/Layout'

import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <div className='home'>
                    <PostCards />
                </div>
            </Layout>
        )
    }
}
