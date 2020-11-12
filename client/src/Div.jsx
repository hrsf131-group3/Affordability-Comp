<body>
<div className="padding-1">
  <h3 id="heading-container" style={{margin: '0px 0px 8px'}}>
    <div className="text-1">Affordability</div>
  </h3>
</div>
<div className="padding-2">
  <div className="text-2">Calculate your monthly mortgage payments</div>
  <div className="text-3">{`Your est. payment:${math.payment}`}</div>
</div>
<div color="default" className="text-4">
  <div className="flex-rows callout-1">
    <div id="interactive-container" className="grid-container-1">
      <div width="1,1,1,0.33" className="grid-Cellbox-1">
        <div id="input-control-homePrice" className="input-conrols-container-1">
          <div className="financial-detail-1">
            <div className="text-5">
              <label name="HomePriceInput">Home Price</label>
            </div>
            <input id="HomePriceInput" id="input-control-homePrice" className="input-1" type="text" value={math.homePrice} style={{width: '112px'}}></input>
          </div>
          <div id="home-price-slider" className="input-slider">
            <input type="range" min="0" max={math.homePrice * 1.25} step="10" aria-label="Home Price" className="input-slide-rangeInput" value={math.homePrice}></input>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</body>