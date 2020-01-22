import React from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'

class CharacterIndex extends React.Component {
  state = {
    characters: null
  }

  async componentDidMount() {
    try {
      const characters = await axios.get('https://breakingbadapi.com/api/characters')
      console.log(characters.data)
      this.setState({ characters: characters.data })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {/* {this.state.characters.map(character)} */}
          </div>
        </div>
      </section>
    )
  }

}

export default CharacterIndex