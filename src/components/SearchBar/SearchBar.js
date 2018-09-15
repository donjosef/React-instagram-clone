import React, {Component} from 'react';
import './SearchBar.css'
class SearchBar extends Component {
  state = {
    value: ''
  }

  changeInputHanlder = (e) => {
    this.setState({
      value: e.target.value
    })
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
                  value={this.state.value}
                  onChange={this.changeInputHanlder}
                  className="form-control input-lg"
                  placeholder="Search" />
              <span className="input-group-btn">
                  <button className="btn btn-info btn-lg" type="button">
                      <i className="glyphicon glyphicon-search"></i>
                  </button>
              </span>
             </div>
           </div>
      </header>
    );
  }
}

export default SearchBar;
