import React, { Component } from 'react'
import NewItem from './NewItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';




export class NewCom extends Component {

  static defaultProps = {
    country: 'us',  
    category:"science"
  } 

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string
  }
  
  categoryUp = (titles) => {
    return titles.charAt(0).toUpperCase() + titles.slice(1);
  }

  constructor(props){
    super(props);
    console.log("This is constructor");
    this.state = {
      articals: [],
      loading: false,
      page: 1,
      showAlert: false,
      totalResult:0
    };
    document.title=this.categoryUp(this.props.category)

  }
  
  

updateNews=async()=> {
    console.log("cmd")
    this.setState({loading:true})
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=04e3e5218a2840f8b78d54a5afe2925d&page=1&pageSize=${this.props.pageSize}`);

    let parseData = await data.json();
    console.log(parseData.size);
    // this.setState({ articals: parseData.articles });
    this.setState({
      // page: this.state.page + 1,
      totalResult: parseData.totalResults,
      loading: false,
      articals: parseData.articles
    });
    console.log(parseData.totalResults)
}
  
async componentDidMount() {
  this.updateNews();
}
  

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(async () => {
      this.setState({ page: this.state.page + 1 });
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=04e3e5218a2840f8b78d54a5afe2925d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`)
      this.setState({loading:true})
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        articals: this.state.articals.concat(parseData.articles),
        totalResult: parseData.totalResults,
        loading: false
      })
    }, 1500);
  };

  render() {
    return (
      < >
        <h2 className='text-center'>NewsMonkey- Top { this.props.category} headline</h2>
         {/* {this.state.loading && <Loader/>} */}
        
          <InfiniteScroll
          dataLength={this.state.articals?.length || 0}
          //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articals!==this.state.totalResult}
          loader={<Loader/>}
        >
          <div className="container">
              <div className='row' >
                { this.state.articals&&this.state.articals.map((ele)=>{ 
                return <div className='col-md-4 my-2 ' key={ele.url}>
                  <NewItem title={ele.title ? ele.title.slice(0, 45) : ""} description={ele.description ? ele.description.slice(0, 88) : ""} imageUrl={!ele.urlToImage ? "https://images.seattletimes.com/wp-content/uploads/2025/05/urnpublicidap.org7c119d11d37b2b5b0fa254154b4aba8eNew_Cosmic_Object_22090.jpg?d=1200x630" : ele.urlToImage}
                  newsUrl={ele.url} author={ele.author} date={ele.publishedAt} />
                </div> } 
                  )}  
              </div>   
          </div>
          </InfiniteScroll>
        

        {/* <div className='d-flex justify-content-between'>
        <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}>&laquo; Previous</button>
        <button type="button" className="btn btn-dark " onClick={this.handleNextClick} style={{width:"85px", height:""}}>Next &raquo;</button>
        </div> */}
      
      </>
      
    )
  }
}

export default NewCom


// handleNextClick = async () => {
  //   console.log("Next");
  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews();
  // }

  // handlePrevClick = async () => {
  //   console.log("Previous");
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
    
  // }



// if (this.state.page + 1 > (this.state.totalResult / this.props.pageSize)) {

//   alert("No more news found!")
// } else {
//   this.setState({ page: this.state.page + 1 })
//   // let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=2b4a77c40ffb4ab5bddb535c3946710b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`)
//   // this.setState({loading:true})
//   // let parseData = await data.json();
//   // console.log(parseData);
//   // this.setState({
//   //   page: this.state.page +1,
//   //   articals: parseData.articles,
//   //   loading:false
//   // })
// }





// articals=[
  //   {
  //   "source": {
  //   "id": "the-verge",
  //   "name": "The Verge"
  //   },
  //   "author": "Dominic Preston",
  //   "title": "Apple’s DIY repair program now covers iPads",
  //   "description": "Apple is expanding its self-service repair program to cover a range of iPads, including mini, Air, and Pro models. The program opens tomorrow, at which point you’ll be able to order spare parts and repair kits for the Apple tablets. The program is mostly limi…",
  //   "url": "https://www.theverge.com/news/675475/apple-self-service-repair-progam-ipad-air-pro-mini",
  //   "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/iPad_Mini_8.webp?quality=90&strip=all&crop=0,10.416314811687,100,79.167370376626",
  //   "publishedAt": "2025-05-28T11:48:45Z",
  //   "content": "Recent iPad, mini, Air, and Pro models are now covered by official spare parts for self-service repair.\r\nRecent iPad, mini, Air, and Pro models are now covered by official spare parts for self-servic… [+1323 chars]"
  //     },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Gizmodo.com"
  //   },
  //   "author": "Joe Tilleli",
  //   "title": "This UGREEN Tracker Is 3x Cheaper Than Apple AirTag, Nearly Free Right Now on Amazon",
  //   "description": "Save 50% on the UGREEN FineTrack Smart Finder over at Amazon—its lowest price of the month.",
  //   "url": "https://gizmodo.com/this-ugreen-tracker-is-3x-cheaper-than-apple-airtag-nearly-free-right-now-on-amazon-2000608051",
  //   "urlToImage": "https://gizmodo.com/app/uploads/2025/05/UGREENTracker.jpg",
  //   "publishedAt": "2025-05-28T12:10:04Z",
  //   "content": "If you’re hoping to take better care of your stuff, there is a product out there that can help you achieve your goal. The UGREEN FineTrack Smart Finder. As someone who is always misplacing their keys… [+1976 chars]"
  //     },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Gizmodo.com"
  //   },
  //   "author": "Brittany Vincent",
  //   "title": "This Multi-Port Anker Car Charger Is Practically Free Even After Memorial Day, but Stock’s Disappearing Fast",
  //   "description": "If you happen to get tired of plugging in cords to multiple outlets, here's a simple solution.",
  //   "url": "https://gizmodo.com/this-multi-port-anker-car-charger-is-practically-free-even-after-memorial-day-but-stocks-disappearing-fast-2000607993",
  //   "urlToImage": "https://gizmodo.com/app/uploads/2025/05/ankercompact.jpg",
  //   "publishedAt": "2025-05-28T14:10:57Z",
  //   "content": "How many times have you jumped into the car only to realize that you don’t have much battery power left? It’s something we’ve all done, so don’t be shy. And if you don’t have a newer car, you probabl… [+2138 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "MacRumors"
  //   },
  //   "author": "Mitchel Broussard",
  //   "title": "This Week Is Your Last Chance to Get One Year of Peacock for Just $24.99 (Regular $79.99)",
  //   "description": "Peacock is offering new subscribers a chance to get a full year of its premium plan for just $24.99 for your first year, down from the regular price of $79.99 per year. This is only a $5 difference when compared to Peacock's Black Friday discount from last ye…",
  //   "url": "https://www.macrumors.com/2025/05/28/last-chance-peacock-24/",
  //   "urlToImage": "https://images.macrumors.com/t/GvmHVLFtzSjSb0rjTwePBtgLsF0=/2500x/article-new/2025/05/peacock-iphone.jpeg",
  //   "publishedAt": "2025-05-28T17:36:04Z",
  //   "content": "Peacock is offering new subscribers a chance to get a full year of its premium plan for just $24.99 for your first year, down from the regular price of $79.99 per year. This is only a $5 difference w… [+1108 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "MacRumors"
  //   },
  //   "author": "Juli Clover",
  //   "title": "Messages and Find My via Satellite Expand to Mexico",
  //   "description": "Apple today expanded the Messages via Satellite and Find My via Satellite features to Mexico, allowing iPhone users in Mexico to take advantage of Globalstar satellites for communication when cellular and Wi-Fi connectivity options are unavailable.\n\n\n\n\n\nTo us…",
  //   "url": "https://www.macrumors.com/2025/05/28/messages-via-satellite-mexico/",
  //   "urlToImage": "https://images.macrumors.com/t/3IKjicdJj3YNEYNPb-aCPg4j8d8=/2000x/article-new/2025/05/messages-via-satellite-in-mexico.jpg",
  //   "publishedAt": "2025-05-28T16:56:52Z",
  //   "content": "Apple today expanded the Messages via Satellite and Find My via Satellite features to Mexico, allowing iPhone users in Mexico to take advantage of Globalstar satellites for communication when cellula… [+1502 chars]"
  //   }
  // ]