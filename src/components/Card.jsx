export default function Card() {
  return (
    <section className="card-section">
      <div className="card flex-row">
        <img
          className="card__image"
          src="/mount-fuji.webp"
          alt=""
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
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p className="card__location">Japan</p>
            </div>
            <a
              className="card__location-url"
              href="https://maps.app.goo.gl/XiqoDd3MBENW4SbT8"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="card__title">Mount Fuji</h2>
          <p className="card__date">12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="card__description">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
      <hr className="hr" />
    </section>
  )
}
