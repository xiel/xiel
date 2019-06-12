import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <header className="xiel-logo">
      <h1>
        <a href="/">XIEL FrontEnd Development - Felix Leupold - Berlin</a>
      </h1>
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <g fill="#333" fillRule="evenodd">
          <path d="M500 82V0h-82v41h41v41h41zm-41 377h-41v41h82v-82h-41v41zM0 418v82h82v-41H41v-41H0zM41 82V41h41V0H0v82h41z" />
          <path
            className="x"
            d="M340 105l-88 88-88-88-59 59 88 88-88 88 59 59 88-88 88 88 59-59-88-88 88-88-59-59z"
          />
        </g>
      </svg>
    </header>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
