import React, { Component } from 'react'
import './Posts.css'
import Post from '../../components/Post/Post'
import Search from '../../components/Search/Search'
// import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort"
// import Sort from '../../components/Sort/Sort'
import Layout from '../../components/shared/Layout/Layout'
import { getPosts } from '../../services/posts'

class Posts extends Component {
  constructor() {
    super()
    this.state = {
      allPosts: [],
      queriedPosts: [],
      sortType: ''
    }
  }

  async componentDidMount() {
    const allPosts = await getPosts()
    this.setState({ 
      allPosts: allPosts,
      queriedPosts: allPosts 
    })
  }

  handleSearch = event => {
    const sort = () => this.handleSort(this.state.sortType)
    const queriedPosts = this.state.allPosts.filter(post => post.name.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({ queriedPosts }, sort)
  }

  // handleSort = type => {
  //   this.setState({ sortType: type })
  //   const { queriedProducts } = this.state
  //   switch (type) {
  //     case "name-ascending":
  //       this.setState({
  //         queriedProducts: AZ(queriedProducts)
  //       });
  //       break
  //     case "name-descending":
  //       this.setState({
  //         queriedProducts: ZA(queriedProducts)
  //       });
  //       break
  //     case "price-ascending":
  //       this.setState({
  //         queriedProducts: lowestFirst(queriedProducts)
  //       });
  //       break
  //     case "price-descending":
  //       this.setState({
  //         queriedProducts: highestFirst(queriedProducts)
  //       });
  //       break
  //     default:
  //       break
  //   }
  // }

  handleSubmit = event => event.preventDefault()

  render() {
    const postsJSX = this.state.queriedPosts.map((post, index) =>
      <Post _id={post._id} title={post.title} imgURL={post.imgURL} date={post.date} author={post.author} key={index} />
    )

    return (
      <Layout>
        <Search onSubmit={this.handleSubmit} onChange={this.handleSearch} />
        {/* <Sort onSubmit={this.handleSubmit} onChange={this.handleSort} /> */}
        <div className="posts">
          {postsJSX}
        </div>
      </Layout>
    )
  }
}

export default Posts