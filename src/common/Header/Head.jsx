import React from 'react'

const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container mx-auto  flex justify-between">
          <div className="left  ">
            <i className="fa fa-phone"></i>
            <label> +88012 3456 7894</label>
            <i className="fa fa-envelope"></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className="right  ">
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Head