function meteorology() {
  return (
    <>
      <div className="container">
        <h2 className="my-3">三十六小時天氣預報</h2>
        <div className="row row-cols-2 g-4">
          <div className="col">
            <div className="card text-center">
              <div className="card-header h4">台北市</div>
              <div className="card-body">
                <div className="row row-cols-3 g-2">
                  <div className="col">
                    <div className="h5 my-2">23日</div>
                    <p>
                      下午6:00
                      <br />~<br />
                      早上6點
                    </p>
                    <img src="" alt="" />
                    <div>
                      <p>多雲時晴</p>
                    </div>
                    <div>
                      <i class="bi bi-umbrella-fill"></i>
                      <span>10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default meteorology;
