import {Component} from 'react'
import './index.css'


class Search extends Component {
  state = {
  Location: '',
  Calender: '',
  Price:'$200 - $250',
  ProperType:'Apartments',
  search: ''
  }

onsubmit = event => {
    event.preventDefault()
    this.SearchSendPara()
  }

  componentDidMount() {
    var date = new Date(); // M-D-YYYY

	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();

    var dateString = y + '-' + (m <= 9 ? '0' + m : m) + '-' +(d <= 9 ? '0' + d : d)
    this.setState({Calender: dateString})
  }

   SearchSendPara = () => {
    const {onChangeProperty,onChangePriceRange,onChangeDate,onChangePlace} = this.props
    const {Location,Calender,Price,ProperType} = this.state
    onChangeProperty(ProperType,Price,Calender,Location)
    onChangePriceRange(Price)
    onChangeDate(Calender)
    onChangePlace(Location)
  }

  onChangeLocation = event => {
    this.setState({Location: event.target.value})
  }

    renderLocationInput = () => {
    const {Location} = this.state
    return (
      <div className="container_input_type_loc">
        <label className="input-label" htmlFor="Location">
          Location
        </label>
        <input
          type="text"
          id="Location"
          value={Location}
          className="username-input-field"
          onChange={this.onChangeLocation}
          placeholder="Location"
        />
      </div>
    )
  }

 
  onChangeCalender = event => {
    this.setState({Calender: event.target.value})
  }

   renderCalenderInput = () => {
    const {Calender} = this.state
    return (
      <div className="container_input_type">
        <label className="input-label" htmlFor="Calender">
          Calender
        </label>
        <input
          type="date"
          id="Calender"
          className="username-input-field"
          onChange={this.onChangeCalender}
          placeholder={new.target.Date}
          value={Calender}
        />
      </div>
    )
  }

  onChangePrice = (event) => {
    this.setState({Price: event.target.value})
  }

   renderPriceInput = () => {
    return (
      <div className="container_input_type">
        <label className="input-label" htmlFor="Price">
          Price
        </label>
        <select id="Price" class="form-control" onChange={this.onChangePrice}>
          <option value="$200 - $250">$200 - $250</option>
          <option value="$250 - $2500">$250 - $2500</option>
          <option value="$2500 - $3500">$2500 - $3500</option>
        </select>
      </div>
    )
  }

 onChangeCapital = (event) => {
    this.setState({ProperType: event.target.value})
  }

   renderProperTypeInput = () => {
    return (
      <div className="container_input_type">
        <label className="input-label" htmlFor="Price">
          ProperType
        </label>
        <select id="Price" class="form-control" onChange={this.onChangeCapital}>
          <option value="Apartments">Apartments</option>
          <option value="Vila">Vila</option>
          <option value="Office">Office</option>
          <option value="Rent house">Rent house</option>
        </select>
      </div>
    )
  }

  render() {
    return(
     <div className="filters-group-container">
      <div className="title_search-container">
      </div>
      <form className="search_para_container" onSubmit={this.onsubmit}>
        {this.renderLocationInput()}
        {this.renderCalenderInput()}
        {this.renderPriceInput()}
        {this.renderProperTypeInput()}
        <button
          type="submit"
          className="button"
        >
        Search
        </button>
      </form>
    </div>
    )
  }
}

export default Search
