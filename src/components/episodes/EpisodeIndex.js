import React from 'react'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'

class SeasonOneIndex extends React.Component {
  state = {
    episodes: null
  }

  async componentDidMount() {
    try {
      const episodes = await axios.get('https://breakingbadapi.com/api/episodes')
      console.log(episodes.data)
      this.setState({
        episodes: episodes.data.filter(episode => (
          episode.season === '1'
        ))
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.episodes)
    if (!this.state.episodes) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.episodes.map(episode => <EpisodeCard key={episode.episode_id} {...episode} />)}
          </div>
        </div>
      </section>
    )
  }

}

export default SeasonOneIndex