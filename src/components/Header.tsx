function Header() {

    return (
           
                <header className="normal smaller no_animation smaller subtle nav-down">
                    <div className="content">
                        <div className="sub_media">
                            <div className="nav_wrapper">
                                <a className="logo" href="/">
                                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20" />
                                </a>

                                <ul className="dropdown_menu navigation k-widget k-reset k-header k-menu k-menu-horizontal" data-role="menu" tabIndex={0} role="menubar">
                                    <li aria-haspopup="true" className="k-item k-menu-item k-state-default k-first" role="menuitem" style={{ zIndex: 'auto' }}>
                                        <a className="no_click k-link k-menu-link" href="/movie">Movies<span className="k-menu-expand-arrow k-icon k-i-arrow-60-down"></span></a>
                                        <div className="k-animation-container" style={{ width: '172.406px', height: '137.333px', overflow: 'hidden', zIndex: '10002', top: '40px', left: '0px', boxSizing: 'content-box', display: 'none', position: 'absolute' }} >
                                            <ul className="k-group k-menu-group k-popup k-reset" role="menu" data-role="popup" style={{ maxHeight: '203.667px', overflow: 'auto', position: 'absolute', fontSize: '16px', fontFamily: '&quot;Source Sans Pro&quot;, Arial, sans-serif', fontStretch: '100%', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', display: 'none', transform: 'translateY(-137.333px)' }} aria-hidden="true">
                                                <li className="k-item k-menu-item k-state-default k-first" role="menuitem"><a href="/movie" className="k-link k-menu-link">Popular</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/movie/now-playing" className="k-link k-menu-link">Now Playing</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/movie/upcoming" className="k-link k-menu-link">Upcoming</a></li>
                                                <li className="k-item k-menu-item k-state-default k-last" role="menuitem"><a href="/movie/top-rated" className="k-link k-menu-link">Top Rated</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li aria-haspopup="true" className="k-item k-menu-item k-state-default" role="menuitem" style={{ zIndex: 'auto' }}>
                                        <a className="no_click k-link k-menu-link" href="/tv">TV Shows<span className="k-menu-expand-arrow k-icon k-i-arrow-60-down"></span></a>
                                        <div className="k-animation-container" style={{ width: '172.094px', height: '137.333px', overflow: 'hidden', zIndex: '10002', top: '40px', left: '0px', boxSizing: 'content-box', display: 'none', position: 'absolute' }} aria-hidden="true">
                                            <ul className="k-group k-menu-group k-popup k-reset" role="menu" data-role="popup" style={{ maxHeight: '203.667px', overflow: 'auto', position: 'absolute', fontSize: '16px', fontFamily: '&quot;Source Sans Pro&quot;, Arial, sans-serif', fontStretch: '100%', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', display: 'none', transform: 'translateY(-137.333px)' }} aria-hidden="true">
                                                <li className="k-item k-menu-item k-state-default k-first" role="menuitem"><a href="/tv" className="k-link k-menu-link">Popular</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/tv/airing-today" className="k-link k-menu-link">Airing Today</a></li>
                                                <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/tv/on-the-air" className="k-link k-menu-link">On TV</a></li>
                                                <li className="k-item k-menu-item k-state-default k-last" role="menuitem"><a href="/tv/top-rated" className="k-link k-menu-link">Top Rated</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li aria-haspopup="true" className="k-item k-menu-item k-state-default" role="menuitem" style={{ zIndex: 'auto' }}>
                                        <a className="no_click k-link k-menu-link" href="/person">People<span className="k-menu-expand-arrow k-icon k-i-arrow-60-down"></span></a>
                                        <div className="k-animation-container" style={{ width: '191.333px', height: '47.3333px', overflow: 'hidden', zIndex: '10002', top: '40px', left: '0px', boxSizing: 'content-box', display: 'none', position: 'absolute' }} aria-hidden="true">
                                            <ul className="k-group k-menu-group k-popup k-reset" role="menu" data-role="popup" style={{ position: 'absolute', fontSize: '16px', fontFamily: '&quot;Source Sans Pro&quot;, Arial, sans-serif', fontStretch: '100%', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', display: 'none', transform: 'translateY(-47.3333px)' }} aria-hidden="true">
                                                <li className="k-item k-menu-item k-state-default k-first k-last" role="menuitem"><a href="/person" className="k-link k-menu-link">Popular People</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li aria-haspopup="true" className="k-item k-menu-item k-state-default k-last" role="menuitem" style={{ zIndex: 'auto' }}>
                                        <a className="no_click k-link k-menu-link" href="#">More<span className="k-menu-expand-arrow k-icon k-i-arrow-60-down"></span></a>
                                        <div className="k-animation-container" style={{ width: '174.698px', height: '137.333px', overflow: 'hidden', zIndex: '10002', top: '40px', left: '0px', boxSizing: 'content-box', display: 'none', position: 'absolute' }} aria-hidden="true"><ul className="k-group k-menu-group k-popup k-reset" role="menu" data-role="popup" style={{ maxHeight: '203.667px', overflow: 'auto', position: 'absolute', fontSize: '16px', fontFamily: '&quot;Source Sans Pro&quot;, Arial, sans-serif', fontStretch: '100%', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', display: 'none', transform: 'translateY(-137.333px)' }} aria-hidden="true">
                                            <li className="k-item k-menu-item k-state-default k-first" role="menuitem"><a href="/discuss" className="k-link k-menu-link">Discussions</a></li>
                                            <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/leaderboard" className="k-link k-menu-link">Leaderboard</a></li>
                                            <li className="k-item k-menu-item k-state-default" role="menuitem"><a href="/talk" className="k-link k-menu-link">Support</a></li>
                                            <li className="k-item k-menu-item k-state-default k-last" role="menuitem"><a href="/login?to=read_me&amp;redirect_uri=/docs" target="_blank" className="k-link k-menu-link">API</a></li>
                                        </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex">
                                <ul className="primary">
                                    <li className="glyph new_buttons" data-role="tooltip">
                                        <a className="new_icon no_click" href="#">
                                            <span className="glyphicons_v2 plus white"></span>
                                        </a>
                                    </li>
                                    <li className="translate" data-role="tooltip">
                                        <div>en</div>
                                    </li>
                                    <li className="glyph notifications" data-role="tooltip">
                                        <a className="no_click" href="/settings/notifications"><span className="glyphicons_v2 bell svg invert "></span></a>
                                        <div className="badge hide"><div className="count">0</div></div>
                                    </li>
                                    <li className="user">
                                        <a className="no_click tooltip_hover" title="Profile and Settings" href="/u/PracheeGidh" data-role="tooltip">
                                            <span className="avatar background_color silver">P</span>
                                        </a>
                                    </li>

                                    <li className="glyph search_buttons">
                                        <a className="search" href="/search"><span className="glyphicons_v2 search blue"></span></a>
                                        <a className="close hide" href="/search"><span className="glyphicons_v2 menu-close invert svg"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="search_bar hide">
                        <section className="search show_search_false">
                            <div className="sub_media">
                                <form id="search_form" action="/search" method="get" accept-charset="utf-8">
                                    <label>
                                        <span tabIndex={-1} role="presentation" className="k-widget k-autocomplete k-autocomplete-clearable k-state-default" >
                                            <input dir="auto" id="search_v4" name="query" type="text" tabIndex={1} autoCorrect="off" autoComplete="off" spellCheck="false" placeholder="Search for a movie, tv show, person..." value="" data-role="autocomplete" className="k-input" role="textbox" aria-haspopup="true" aria-disabled="false" aria-readonly="false" aria-owns="search_v4_listbox" aria-autocomplete="list">
                                            </input>
                                        </span>

                                    </label>
                                    <input type="submit" />
                                </form>
                            </div>
                        </section>
                    </div>
                    <div className="k-list-container k-popup k-group k-reset" id="search_v4-list" data-role="popup" aria-hidden="true" style={{ display: 'none', position: 'absolute' }}>
                        <div className="k-group-header" style={{ display: 'none' }}>
                        </div>
                        <div className="k-list-scroller" unselectable="on">
                            <ul unselectable="on" className="k-list k-reset" tabIndex={-1} aria-hidden="true" id="search_v4_listbox" aria-live="polite" data-role="staticlist" role="listbox">
                            </ul>
                        </div>
                        <div className="k-nodata" style={{ display: 'none' }}>
                        </div>
                    </div>
                </header>
           
    )
}

export default Header;