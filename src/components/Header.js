import React from 'react';

function Header() {
    return (
        <>
            <header className="u-clearfix u-header u-header" id="sec-862d">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <a href="https://nicepage.com" className="u-image u-logo u-image-1">
                        <img src="images/b78c1c47-c604-4ca8-9934-e25928046c8b.png"
                             className="u-logo-image u-logo-image-1"/>
                    </a>
                    <nav className="u-menu u-menu-hamburger u-offcanvas u-menu-1" data-responsive-from="XL">
                        <div className="menu-collapse" style={{fontSize: '1rem', letterSpacing: 0, fontWeight: 700}}>
                            <a className="u-button-style u-custom-border u-custom-border-color u-custom-borders u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                               href="#"
                               data-lang-en="{&quot;content&quot;:&quot;<svg class=\&quot;u-svg-link\&quot; viewBox=\&quot;0 0 24 24\&quot;><use xlink:href=\&quot;#menu-hamburger\&quot;></use></svg><svg class=\&quot;u-svg-content\&quot; version=\&quot;1.1\&quot; id=\&quot;menu-hamburger\&quot; viewBox=\&quot;0 0 16 16\&quot; x=\&quot;0px\&quot; y=\&quot;0px\&quot; xmlns:xlink=\&quot;http://www.w3.org/1999/xlink\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot;>    <g>        <rect y=\&quot;1\&quot; width=\&quot;16\&quot; height=\&quot;2\&quot;></rect>        <rect y=\&quot;7\&quot; width=\&quot;16\&quot; height=\&quot;2\&quot;></rect>        <rect y=\&quot;13\&quot; width=\&quot;16\&quot; height=\&quot;2\&quot;></rect>    </g></svg>&quot;,&quot;href&quot;:&quot;#&quot;}">
                                <svg className="u-svg-link" viewBox="0 0 24 24">
                                    <use xlinkHref="#menu-hamburger"></use>
                                </svg>
                                <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16"
                                     x="0px" y="0px"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect y="1" width="16" height="2"></rect>
                                        <rect y="7" width="16" height="2"></rect>
                                        <rect y="13" width="16" height="2"></rect>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div className="u-custom-menu u-nav-container">
                            <ul className="u-nav u-spacing-20 u-unstyled u-nav-1">
                                <li className="u-nav-item"><a
                                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-2-base"
                                    href="#" style={{padding: 10}}
                                    data-lang-en="{&quot;content&quot;:&quot;Home&quot;,&quot;href&quot;:&quot;#&quot;}">Home</a>
                                </li>
                            </ul>
                        </div>
                        <div className="u-custom-menu u-nav-container-collapse">
                            <div
                                className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                <div className="u-inner-container-layout u-sidenav-overflow">
                                    <div className="u-menu-close"></div>
                                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                        <li className="u-nav-item"><a className="u-button-style u-nav-link" href="#"
                                                                      data-lang-en="{&quot;content&quot;:&quot;Home&quot;,&quot;href&quot;:&quot;#&quot;}">Home</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    );
}

export default Header;