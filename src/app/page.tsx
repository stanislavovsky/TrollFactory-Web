export default function Home() {
  return (
    <div id="section-quick">
      <div className="flex h-screen">
        <div className="m-auto">
          <h1 className="logo">TrollFactory</h1>
          <div className="card card-generator mt-7 mb-20">
            <div className="card-body">
              <label className="input flex items-center gap-2">
                <span className="tf-input-label">First name</span>
                <input type="text" className="grow" placeholder="First name" />
              </label>
              <label className="input flex items-center gap-2">
                <span className="tf-input-label">Last name</span>
                <input type="text" className="grow" placeholder="Last name" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}