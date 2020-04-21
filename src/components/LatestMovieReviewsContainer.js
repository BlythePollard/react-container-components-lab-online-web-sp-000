import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

//class component with state
//top-level wrapping element with class "lastest-movie-reviews"
//fetch list of most recent reviews & display them

export default class LatestMovieReviews extends Component {
    constructor() {
        super();
        this.state = {
            reviews : []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(json => this.setState({reviews: json})
        )
    }

    render() {
        return(
            <div className="latest-movie-reviews">
            <MovieReviews movies={this.state.reviews}/>
            </div>
        )
    }
}