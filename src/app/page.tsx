export default function Home() {
  return (
    <div className="tf-bg-blur font-mono">
      <div className="flex h-screen tf-bg-grid">
        <img src="/sparkle.png" className="absolute left-1/10 top-1/6" />
        <img src="/sparkle1.png" className="absolute top-1/4 right-1/10" />
        <img src="/sparkle.png" className="absolute bottom-1/4 left-1/3" />
        <div className="m-auto">
          <h1 className="tf-logo font-bold text-center text-4xl md:text-5xl lg:text-6xl">TrollFactory</h1>
          <div className="card bg-wt-50 mt-7 mb-20">
            <div className="card-body">
              <select className="input tf-input tf-input-top text-tf-0 select font-medium text-sm md:text-base text-last-center w-full">
                <option disabled selected>Dataset</option>
                <option>🇵🇱 polski / Polska</option>
                <option>🇺🇸 English / USA</option>
                <option>🇨🇳 中国人 / 中国</option>
              </select>
              <label className="input flex items-center gap-2 tf-input tf-input-middle">
                <span className="tf-input-label pl-1 w-28 hidden md:block text-sm md:text-base font-medium font-mono text-tf-0">Sex</span>
                <div className="form-control">
                  <label className="label cursor-pointer pl-0">
                    <span className="label-text pr-2">Female</span>
                    <input type="radio" name="radio-10" className="radio checked:bg-secondary" />
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
                    <input type="radio" name="radio-10" className="radio checked:bg-secondary" defaultChecked />
                  </label>
                </div>
              </label>
              <label className="input flex items-center gap-2 tf-input tf-input-middle">
                <span className="tf-input-label pl-1 w-28 hidden md:block text-sm md:text-base font-medium font-mono text-tf-0">First name</span>
                <input type="text" className="grow text-sm" placeholder="First name" />
              </label>
              <label className="input flex items-center gap-2 tf-input tf-input-bottom">
                <span className="tf-input-label pl-1 w-28 hidden md:block text-sm md:text-base font-medium font-mono text-tf-0">Last name</span>
                <input type="text" className="grow text-sm" placeholder="Last name" />
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