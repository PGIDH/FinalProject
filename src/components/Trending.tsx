import { MovieData, TrendingData } from './models/Models';
import { useEffect, useState } from 'react';

function Trending(props: { data: MovieData }) {

    const [trendData, setTrendData] = useState<TrendingData[]>();
    useEffect(() => {
        if (props?.data.results)
            setTrendData(props?.data.results)
    }, [props?.data.results]);

    return (
        <section className="inner_content trending no_pad">
            <div className="column_wrapper">
                <div className="content_wrapper wrap no_bottom_pad">
                    <div className="column">
                        <div className="column_header">
                            <h2>Trending</h2>
                            <div className="selector_wrap">
                                <div className="selector">
                                    <div className="anchor selected">
                                        <h3><a href="#" className="no_click" data-panel="trending_scroller" data-group="today">Today <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                        <div className="background"></div>
                                    </div>

                                    <div className="anchor">
                                        <h3><a href="#" className="no_click" data-panel="trending_scroller" data-group="this-week">This Week <span className="glyphicons_v2 chevron-down"></span></a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Carousel>
                    {
                       
                    }
                </Carousel> */}
                        <div id="trending_scroller" className="media discover scroller_wrap should_fade is_hidden">
                            <div className="column_content flex scroller loaded" >
                                {trendData?.map((item: TrendingData, i: number) => <Item data={item} />)}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

function Item(item: { data: TrendingData }) {
    return (
        <div className="card style_1">
            <div className="image">
                <div className="wrapper">
                    <a className="image" href="/tv/114472" title={item.data.title}>
                        <img loading="lazy" className="poster" src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + item.data.poster_path}
                            srcSet={"https://www.themoviedb.org/t/p/w220_and_h330_face" + item.data.poster_path + " 1x"} alt="" />
                    </a>
                </div>
                {/* <div className="options" data-id="114472" data-object-id="5fd2e6095a9915003fcb24ed" data-media-type="tv" data-role="tooltip">
                            <a className="no_click" href="#"><div className="glyphicons_v2 circle-more white"></div></a>
                        </div> */}
            </div>
            <div className="content">
                <div className="consensus tight">
                    <div className="outer_ring">
                        <div className="user_score_chart 5fd2e6095a9915003fcb24ed" data-percent="79.0" data-track-color="#204529" data-bar-color="#21d07a">
                            <div className="percent">
                                <span className="icon icon-r79"></span>
                            </div>
                            <canvas height="51" width="51" style={{ height: '34px', width: '34px' }}></canvas></div>
                    </div>
                </div>

                <h2><a href="/tv/114472" title={item.data.title}>{item.data.title ? item.data.title : item.data.original_name}</a></h2>
                <p>
                    {new Date(item.data.release_date ? item.data.release_date : item.data.first_air_date).toLocaleString('default', { month: 'short' })}  {" "}
                    {new Date(item.data.release_date ? item.data.release_date : item.data.first_air_date).getDate() + ", "}
                    {new Date(item.data.release_date ? item.data.release_date : item.data.first_air_date).getFullYear()}
                </p>
            </div>

            <div className="hover 114472"></div>
        </div>
                
    )
}

export default Trending;