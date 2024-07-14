export default function Card(props) {
  return (
    <section className="card-section">
      <div className="card flex-row">
        <img
          className="card__image"
          src={props.item.imageSource}
          alt={props.item.imageAlt}
          width="200"
          height="220"
        />
        <div className="card__text-content flex-column">
          <div className="card__location-wrapper flex-row">
            <div className="flex-row">
              <svg
                className="card__location-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p className="card__location">{props.item.location}</p>
            </div>
            <a
              className="card__location-url"
              href={props.item.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
              <span className="visually-hidden">open on a new tab</span>
            </a>
          </div>
          <h2 className="card__title">{props.item.title}</h2>
          <p className="card__date">{`${props.item.startDate} - ${props.item.endDate}`}</p>
          <p className="card__description">{props.item.description}</p>
        </div>
      </div>
      <hr className="hr" />
    </section>
  )
}
