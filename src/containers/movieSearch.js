import React from 'react'
import MovieListItem from '../components/movie-list-item'

class MovieSearch extends React.Component {
  constructor(props) {
    super(props)
    console.log('initialized state')
    this.state = { movieResults: [], movieError: undefined }
  }

  getMovieInfor = searchCriteria => {
    fetch(
      `https://www.omdbapi.com/?apikey=21d70f1a&s=${searchCriteria}&y=&plot=full&r=json`
    )
    then(response => {
      if (response.status !== 200) {
        this.setState({ movieError: response })
        return
      }
      response.json().then(data => {
        console.log('getMovieInfo success! setState()')
        this.setState({ movieResults: data.Search })
      })
    }).catch(err => {
      console.log('fetch error :-S', err)
      this.setState({ movieError: err })
    })
  }

  componentDidMount() {
    console.log(`componentDidMount() calling getMovieInfor()...`)
    this.getMovieInfo('Bat Man')
  }

  render() {
    console.log('Render!', JSON.stringify(this.state, null, 2))
    return (
      <div className="pa3">
        <h1>Movie Results</h1>
        <main className="mw6 center">
          {this.state.movieResults.map(movie =>
            <MovieListItem
              Title={movie.Title}
              Type={movie.Type}
              Year={movie.Year}
            />
          )}

        </main>

      </div>
    )
  }
}

export default MovieSearch
