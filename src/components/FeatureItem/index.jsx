import { PropTypes } from "prop-types";

function FeatureItem ({content}) {
  return (
    <div className="feature-item">
      <img
        src={`/img/icon-${content.image}.png`}
        alt="Chat Icon"
        className="feature-icon"
      />
      <h3 className="feature-item-title">{content.title}</h3>
      <p> {content.description} </p>
    </div>
  )
}

FeatureItem.propTypes = {
  content: PropTypes.object
}

export default FeatureItem;