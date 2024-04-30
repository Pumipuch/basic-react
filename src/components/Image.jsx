import PropTypes from "prop-types"

export default function Image({ imageUrl }) {
    return (
        <>
            {imageUrl}
            <div>
                <img src={imageUrl} width="100px"></img>
            </div>

        </>
    )
}

// npm proptypes และประกาศ types ของ params
Image.propTypes = {
    imageUrl: PropTypes.string
}