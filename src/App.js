import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isSaved: false, inputText: ''}

  editText = event => {
    this.setState({inputText: event.target.value})
  }

  toggleSaved = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {isSaved, inputText} = this.state

    return (
      <div className="app-container">
        <div className="edit-card">
          <h1 className="head">Editable Text Input</h1>
          <div>
            {isSaved ? (
              <p className="para">{inputText}</p>
            ) : (
              <input
                type="text"
                value={inputText}
                onChange={this.editText}
                className="input-box"
              />
            )}
            <button type="button" onClick={this.toggleSaved} className="butt">
              {isSaved ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default App
