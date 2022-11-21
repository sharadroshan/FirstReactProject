import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
    <Carousel autoPlay={false} autoFocus={true}>
        <div>
            <img alt="" src="https://www.jssor.com/premium/sport/img/dreamstime_m_77849612_run.png" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="https://www.jssor.com/premium/sport/img/surf.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="https://www.jssor.com/premium/music/img/listener.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src="https://www.sliit.lk/wp-content/uploads/2017/11/Slider-Background.jpg" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img alt="" src="https://www.jssor.com/premium/music/img/beats.jpg" />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img alt="" src="https://www.jssor.com/premium/music/img/music-project.jpg" />
            <p className="legend">Legend 6</p>
        </div>
        <div>
            <img alt="" src="https://www.silvertouch.com/wp-content/themes/silvertouch/assets/images-2020/rpa-banner.jpg" />
            <p className="legend">Legend 7</p>
        </div>
        <div>
            <img alt="" src="https://www.w3schools.com/howto/img_lights_wide.jpg" />
            <p className="legend">Legend 7</p>
        </div>
        <div>
            <img alt="" src="https://www.w3schools.com/howto/img_snow_wide.jpg" />
            <p className="legend">Legend 7</p>
        </div>
        <div>
            <img alt="" src="https://cymax.com.au/wp-content/uploads/2017/06/IT-solutions.jpg" />
            <p className="legend">Legend 7</p>
        </div>
        <div>
            <img alt="" src="https://www.inovasisolusi.com/wp-content/uploads/2018/10/isi_it_solutions2.jpg" />
            <p className="legend">Legend 7</p>
        </div>
    </Carousel>
);
