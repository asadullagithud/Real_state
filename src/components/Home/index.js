import { Component } from "react";
import {BsSearch} from 'react-icons/bs'
import Search from "../Search";
import Card from '../Card'
import "./index.css";

const list = [
  {
    id: 1,
    cover: "https://i.postimg.cc/PrRGrRpb/house-g1118d2609-1920.jpg",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    priceCategory: "$200 - $250",
    price: "$3,700",
    date: "2022-10-5",
    type: "Rent house",
    state: false,
  },
  {
    id: 2,
    cover: "https://i.postimg.cc/Y9nRfJwb/house-g46a539519-1280.jpg",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Rent",
    priceCategory: "$200 - $250",
    price: "$9,750",
    date: "2022-10-1",
    type: "Rent house",
    state: true,
  },
  {
    id: 3,
    cover: "https://i.postimg.cc/zD4LyWt9/pexels-pixabay-271795.jpg",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    priceCategory: "$200 - $250",
    price: "$5,860",
    date: "2022-10-8",
    state: false,
    type: "Rent house",
  },
  {
    id: 4,
    cover: "https://i.postimg.cc/ryWsX5Dw/pexels-pixabay-164558.jpg",
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    priceCategory: "$250 - $2500",
    price: "$7,540",
    date: "2022-10-21",
    state: true,
    type: "Rent house",
  },
  {
    id: 5,
    cover: "https://i.postimg.cc/R0kmXbQQ/pexels-pixabay-280229.jpg",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    priceCategory: "$2500 - $3500",
    price: "$4,850",
    date: "2022-11-28",
    state: false,
    type: "Rent house",
  },
  {
    id: 6,
    cover: "https://i.postimg.cc/XYrtmkv2/pexels-binyamin-mellish-1396132.jpg",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    priceCategory: "$200 - $250",
    price: "$2,742",
    date: "2022-10-14",
    state: false,
    type: "Apartments",
  },
  {
    id: 7,
    cover: "https://i.postimg.cc/8cCZWTJy/pexels-pixabay-280222.jpg",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    priceCategory: "$200 - $250",
    price: "$3,700",
    state: false,
    date: "2022-10-5",
    type: "Office",
  },
  {
    id: 8,
    cover: "https://i.postimg.cc/sx1JxKqq/pexels-pixabay-209315.jpg",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    priceCategory: "$200 - $250",
    price: "$9,750",
    state: false,
    date: "2022-10-1",
    type: "Office",
  },
  {
    id: 9,
    cover: "https://i.postimg.cc/4xYsVFYP/pexels-home-decor-interiors-1827054.jpg",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    priceCategory: "$250 - $2500",
    price: "$5,860",
    state: false,
    date: "2022-10-8",
    type: "Vila",
  },
  {
    id: 10,
    cover:
      "https://i.postimg.cc/xjbRwpGN/pexels-mike-b-463996.jpg",
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    priceCategory: "$250 - $2500",
    price: "$7,540",
    state: false,    
    date: "2022-10-21",
    type: "Vila",
  },
  {
    id: 11,
    cover: "https://i.postimg.cc/gkzxVn0c/pexels-pixabay-37347.jpg",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    priceCategory: "$2500 - $3500",
    price: "$4,850",
    state: false,
    date: "2022-11-28",
    type: "Office",
  },
  {
    id: 12,
    cover: "https://i.postimg.cc/HWZgNx2k/pexels-cadeau-maestro-1170412.jpg",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    priceCategory: "200 - $250",
    price: "$2,742",
    state: false,
    date: "2022-10-14",
    type: "Office",
  },
  {
    id: 13,
    cover: "https://i.postimg.cc/28sPpBBr/pexels-pixabay-260689.jpg",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    priceCategory: "$200 - $250",
    price: "$3,700",
    state: false,
    date: "2022-10-5",
    type: "Office",
  },
  {
    id: 14,
    cover: "https://i.postimg.cc/k5B1BJSf/pexels-pixabay-267507.jpg",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    priceCategory: "$200 - $250",
    price: "$9,750",
    state: false,
    date: "2022-10-1",
    type: "Office",
  },
  {
    id: 15,
    cover: "https://i.postimg.cc/x8PMG1Fw/pexels-marc-mueller-380768.jpg",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    priceCategory: "$250 - $2500",
    price: "$5,860",
    state: false,
    date: "2022-10-8",
    type: "Office",
  },
  {
    id: 16,
    cover: "https://i.postimg.cc/XX6SgZfj/pexels-chris-goodwin-32870.jpg",
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Rent",
    priceCategory: "$250 - $2500",
    price: "$7,540",
    state: false,
    date: "2022-10-21",
    type: "Vila",
  },
  {
    id: 17,
    cover: "https://i.postimg.cc/XX6SgZfj/pexels-chris-goodwin-32870.jpg",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Sale",
    priceCategory: "$2500 - $3500",
    price: "$4,850",
    state: false,
    date: "2022-11-28",
    type: "Vila",
  },
  {
    id: 18,
    cover: "https://i.postimg.cc/HW2hZhT0/pexels-expect-best-323775.jpg",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    priceCategory: "200 - $250",
    price: "$2,742",
    state: false,
    date: "2022-10-14",
    type: "Vila",
  },
  {
    id: 19,
    cover: "https://i.postimg.cc/0jbDCj8B/pexels-victoria-akvarel-1648776.jpg",
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    priceCategory: "$200 - $250",
    price: "$3,700",
    state: false,
    date: "2022-10-5",
    type: "Vila",
  },
  {
    id: 20,
    cover: "https://i.postimg.cc/0jBhyV5H/pexels-pixabay-276724.jpg",
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    priceCategory: "$200 - $250",
    price: "$9,750",
    state: false,
    date: "2022-10-1",
    type: "Vila",
  },
  {
    id: 21,
    cover: "https://i.postimg.cc/NMZBN6ZT/pexels-max-vakhtbovych-5997993.jpg",
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    priceCategory: "$200 - $250",
    price: "$5,860",
    state: false,
    date: "2022-10-8",
    type: "Apartments",
  },
  {
    id: 22,
    cover: "https://i.postimg.cc/jdGd8X6X/pexels-pixabay-271624.jpg",
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    priceCategory: "$250 - $2500",
    price: "$7,540",
    date: "2022-10-21",
    state: false,
    type: "Apartments",
  },
  {
    id: 23,
    cover: "https://i.postimg.cc/F1tzJgDD/pexels-expect-best-323705.jpg",
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Sale",
    priceCategory: "$250 - $2500",
    price: "$4,850",
    state: false,
    date: "2022-11-28",
    type: "Apartments",
  },
  {
    id: 24,
    cover: "https://i.postimg.cc/L5S696Xb/pexels-aleksejs-bergmanis-681331.jpg",
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    priceCategory: "$200 - $250",
    price: "$2,742",
    state: true,
    date: "2022-10-14",
    type: "Apartments",
  },
];

class Home extends Component {
  state = {
    List: list,
    searchInput: "",
    State: false,
  };

  clearFilters = () => {
    this.setState(
      {
        searchInput: "",
      },
      this.getProducts
    );
  };
  onChangeProperty = (event, price, dat, check) => {
    const proprList = list.filter((eachUser) => eachUser.type === event);
    const priceList = proprList.filter(
      (eachUser) => eachUser.priceCategory === price
    );
    const dateList = priceList.filter((eachUser) => eachUser.date > dat);
    const searchResult = dateList.filter((eachUser) =>
      eachUser.location.toLowerCase().includes(check.toLowerCase())
    );
    this.setState({ List: searchResult });
  };

  renderNoHome = () => (
    <div className="no-products-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
        className="no-products-img"
        alt="no videos"
      />
      <p className="para-c">
        Try different key words.
      </p>
    </div>
  )

   onEnterSearchInput = event => {
    const {enterSearchInput} = this.props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

   onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
 
    renderChangeState = id => {
        console.log('reached')
    this.setState(prevState => ({
      List: prevState.List.map(each => {
        if (id === each.id) {
          return {...each, state: !each.state}
        }
        return each
      }),
    }))
  }

  render() {
    const { searchInput, List } = this.state;
    const searchResults = List.filter((eachUser) =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(searchResults);
    return (
      <div>
        <div className="home-search">
        <h1 className="head">search a properties to Rent</h1>
          <div className="search-container">
            <input
              value={searchInput}
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              onKeyDown={this.onEnterSearchInput}
          />
          <BsSearch className="search-icon" size={10}/>
          </div>
        </div>
        <Search
          searchInput={searchInput}
          onChangeProperty={this.onChangeProperty}
          onChangePriceRange={this.onChangePriceRange}
          onChangeDate={this.onChangeDate}
          onChangePlace={this.onChangePlace}
          changeSearchInput={this.changeSearchInput}
        />
        <ul>
          {searchResults.length === 0 ? (
            <div className="products-error-view-container1">
              {this.renderNoHome()}
            </div>
          ) : (
        <ul className="container-card-ul">
          {searchResults.map(Item => (
            <Card Item={Item} key={Item.id} renderChangeState={this.renderChangeState}/>
          ))}
        </ul>
          )}
        </ul>
      </div>
    );
  }
}

export default Home;
