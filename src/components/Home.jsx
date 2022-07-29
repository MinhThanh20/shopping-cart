import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://image.thanhnien.vn/w2048/Uploaded/2022/aybunux/2022_05_27/3509-5199.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://kenh14cdn.com/203336854389633024/2022/5/15/iphone-14-pro-1652554779677776785394.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ex-cdn.com/60giay.com/files/content/2022/03/09/iphone-se-2022-1-0701.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item">
                        <img src="	https://i.ex-cdn.com/60giay.com/files/content/2022/03/09/iphone-se-2022-2-0701.jpg" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Product />
        </div>
    )
}

export default Home
