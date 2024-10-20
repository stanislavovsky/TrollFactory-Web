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
              <label className="input flex items-center gap-2 tf-input-top">
                <span className="tf-input-label">First name</span>
                <input type="text" className="grow" placeholder="First name" />
              </label>
              <label className="input flex items-center gap-2 tf-input-middle">
                <span className="tf-input-label">Last name</span>
                <input type="text" className="grow" placeholder="Last name" />
              </label>
              <label className="input flex items-center gap-2 tf-input-bottom">
                <span className="tf-input-label">Last name</span>
                <input type="text" className="grow" placeholder="Last name" />
              </label>
            </div>
            <button class="btn" id="generate-btn">
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