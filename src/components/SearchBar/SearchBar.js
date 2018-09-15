import React, {Component} from 'react';
import './SearchBar.css'
class SearchBar extends Component {
  state = {
    query: ''
  }

  changeInputHandler = (e) => {
    this.setState({
      query: e.target.value
    }, () => this.props.onFilterPosts(this.state.query))
  }
  
  render() {
    return (
      <header className='Search'>
          <div className='Icons_Container'>
            <i className="fab fa-instagram"></i>
            <a href='/'>Instragram</a>
          </div>
          <div id="custom-search-input">
            <div className="input-group col-md-12">
              <input
                  value={this.state.query}
                  onChange={this.changeInputHandler}
                  className="form-control input-lg"
                  placeholder="Search by User..." />
             </div>
           </div>
      </header>
    );
  }
}

export default SearchBar;
