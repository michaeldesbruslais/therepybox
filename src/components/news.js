import React, {Component} from 'react';

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title:'',
      description:''
    }
  }

  render(){
    let {title, description} = this.state
    return (
      <div className='news-comp'>
        <div className='news-title'>{title}</div>
        <div className='news-desc'>{description}</div>
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:5000/get-news')
    .then(res=>res.json())
    .then(res=> {
      this.setState({
        title: res.title,
        description: res.contentSnippet
      })
    })
    .catch(e=>console.log(e))
  }
}

export default News