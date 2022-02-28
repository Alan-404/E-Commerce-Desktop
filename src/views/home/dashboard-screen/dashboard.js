


const buildBanner = async() => {
    banners = []
    bannerShow = ''
    await fetch('http://localhost:8000/banner/banner_api',{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        bannerShow = 
        `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div class="carousel-inner">
            ${data.banners.map((banner, index) => {
                if (index == 0){
                    return `<div class="carousel-item active">
                        <img src=${banner.image} class="myBanner" alt="...">
                    </div>`
                }
                return `
                <div class="carousel-item">
                    <img src=${banner.image} class="myBanner" alt="...">
                </div>`
            })}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`
    })
    .catch(error => console.log(error))

    document.getElementById('showBanner').innerHTML = bannerShow
}

const start = async() => {
    await buildBanner()
}


start()