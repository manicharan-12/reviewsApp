// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewCount: 0}

  onClickLeftArrow = () => {
    const {reviewCount} = this.state
    if (reviewCount !== 0) {
      this.setState(prevState => ({reviewCount: prevState.reviewCount - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewCount} = this.state
    if (reviewCount !== 3) {
      this.setState(prevState => ({reviewCount: prevState.reviewCount + 1}))
    }
  }

  render() {
    const {reviewCount} = this.state
    const {reviewsList} = this.props

    return (
      <div className="bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div>
          <img
            src={reviewsList[reviewCount].imgUrl}
            alt={reviewsList[reviewCount].username}
          />
        </div>
        <div className="buttons-container">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="user-name">{reviewsList[reviewCount].username}</p>
          <button
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <div className="content2">
          <p>{reviewsList[reviewCount].companyName}</p>
          <p>{reviewsList[reviewCount].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
