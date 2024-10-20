export default function Home() {
  return (
    <div id="section-quick">
      <div className="flex h-screen" id="section-quick-content">
        <img src="/sparkle.png" className="sparkle" id="sparkle-0"/>
        <img src="/sparkle1.png" className="sparkle" id="sparkle-1"/>
        <img src="/sparkle.png" className="sparkle" id="sparkle-2"/>
        <div className="m-auto">
          <h1 className="logo">TrollFactory</h1>
          <div className="card card-generator mt-7 mb-20">
            <div className="card-body">
              <select className="input tf-input-top select w-full">
                <option disabled selected>Dataset</option>
                <option>🇵🇱 polski / Polska</option>
                <option>🇺🇸 English / USA</option>
                <option>🇨🇳 中国人 / 中国</option>
              </select>
              <label className="input flex items-center gap-2 tf-input-middle">
                <span className="tf-input-label">Sex</span>
                <div className="form-control">
                  <label className="label cursor-pointer pl-0">
                    <span className="label-text pr-2">Female</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-primary" defaultChecked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text px-2">Male</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-secondary" />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text px-2">Any</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-secondary" />
                  </label>
                </div>
              </label>
              <label className="input flex items-center gap-2 tf-input-middle">
                <span className="tf-input-label">First name</span>
                <input type="text" className="grow" placeholder="First name" />
              </label>
              <label className="input flex items-center gap-2 tf-input-bottom">
                <span className="tf-input-label">Last name</span>
                <input type="text" className="grow" placeholder="Last name" />
              </label>
            </div>
            <button className="btn" id="generate-btn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}