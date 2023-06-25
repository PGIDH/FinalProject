
function Banner() {
    return (
        <section className="inner_content new_index">
            <div id="media_v4" className="media discover">
                <div className="column_wrapper">
                    <div className="content_wrapper wrap">
                        <div className="title">
                            <h2>Welcome.</h2>
                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>

                        <div className="search">
                            <form id="inner_search_form" action="/search" method="get" accept-charset="utf-8">
                                <label>
                                    <input dir="auto" id="inner_search_v4" name="query" type="text" tabIndex={1} autoCorrect="off" autoComplete="off" spellCheck="false" placeholder="Search for a movie, tv show, person......" value="" />
                                </label>
                                <input type="submit" value="Search" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;