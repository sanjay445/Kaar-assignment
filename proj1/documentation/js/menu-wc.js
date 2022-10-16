'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">proj1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-dbfae864368338cceaab97899158abe281aa9c714c5ca31771952e7bc32054d0517d67a8022d72e9d0f7bf2386f1a01109e55efabe6662d410f18a57f89ac5d8"' : 'data-target="#xs-components-links-module-AppModule-dbfae864368338cceaab97899158abe281aa9c714c5ca31771952e7bc32054d0517d67a8022d72e9d0f7bf2386f1a01109e55efabe6662d410f18a57f89ac5d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-dbfae864368338cceaab97899158abe281aa9c714c5ca31771952e7bc32054d0517d67a8022d72e9d0f7bf2386f1a01109e55efabe6662d410f18a57f89ac5d8"' :
                                            'id="xs-components-links-module-AppModule-dbfae864368338cceaab97899158abe281aa9c714c5ca31771952e7bc32054d0517d67a8022d72e9d0f7bf2386f1a01109e55efabe6662d410f18a57f89ac5d8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FoodlistModule.html" data-type="entity-link" >FoodlistModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FoodlistModule-9c041ae6b8c8dd30234f82d6710c967d835c196b2d11729f7ffd9cb8706f0de936453d9de6ff400ef46bd9940658d8422bc6b60d66d523e79fed6e666c829346"' : 'data-target="#xs-components-links-module-FoodlistModule-9c041ae6b8c8dd30234f82d6710c967d835c196b2d11729f7ffd9cb8706f0de936453d9de6ff400ef46bd9940658d8422bc6b60d66d523e79fed6e666c829346"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FoodlistModule-9c041ae6b8c8dd30234f82d6710c967d835c196b2d11729f7ffd9cb8706f0de936453d9de6ff400ef46bd9940658d8422bc6b60d66d523e79fed6e666c829346"' :
                                            'id="xs-components-links-module-FoodlistModule-9c041ae6b8c8dd30234f82d6710c967d835c196b2d11729f7ffd9cb8706f0de936453d9de6ff400ef46bd9940658d8422bc6b60d66d523e79fed6e666c829346"' }>
                                            <li class="link">
                                                <a href="components/FooditemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooditemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FoodlistdetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FoodlistdetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OffersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OffersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowdetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowdetailsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-FoodlistModule-9c041ae6b8c8dd30234f82d6710c967d835c196b2d11729f7ffd9cb8706f0de936453d9de6ff400ef46bd9940658d8422bc6b60d66d523e79fed6e666c829346"' : 'data-target="#xs-pipes-links-module-FoodlistModule-9c041ae6b8c8dd30234f82d6710c967d835c196b2d11729f7ffd9cb8706f0de936453d9de6ff400ef46bd9940658d8422bc6b60d66d523e79fed6e666c829346"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-FoodlistModule-9c041ae6b8c8dd30234f82d6710c967d835c196b2d11729f7ffd9cb8706f0de936453d9de6ff400ef46bd9940658d8422bc6b60d66d523e79fed6e666c829346"' :
                                            'id="xs-pipes-links-module-FoodlistModule-9c041ae6b8c8dd30234f82d6710c967d835c196b2d11729f7ffd9cb8706f0de936453d9de6ff400ef46bd9940658d8422bc6b60d66d523e79fed6e666c829346"' }>
                                            <li class="link">
                                                <a href="pipes/PricePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PricePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FoodlistRoutingModule.html" data-type="entity-link" >FoodlistRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-7cc12d3e4f7241a970871a545ff6601279ec651c331df07284513636a3a069a34d3a285dc156bef22739701e85ab5a98e6d8cc4ae505afb88a3206fab69e6155"' : 'data-target="#xs-components-links-module-HomePageModule-7cc12d3e4f7241a970871a545ff6601279ec651c331df07284513636a3a069a34d3a285dc156bef22739701e85ab5a98e6d8cc4ae505afb88a3206fab69e6155"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-7cc12d3e4f7241a970871a545ff6601279ec651c331df07284513636a3a069a34d3a285dc156bef22739701e85ab5a98e6d8cc4ae505afb88a3206fab69e6155"' :
                                            'id="xs-components-links-module-HomePageModule-7cc12d3e4f7241a970871a545ff6601279ec651c331df07284513636a3a069a34d3a285dc156bef22739701e85ab5a98e6d8cc4ae505afb88a3206fab69e6155"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaymentModule-8ffd4e084dd4f67841add729374838296de21eef78b69d12012cd7fceacbfad610c3a6898d9d27833567ba1783ff248a281b8111ec3c08eea17d30cb946092ed"' : 'data-target="#xs-components-links-module-PaymentModule-8ffd4e084dd4f67841add729374838296de21eef78b69d12012cd7fceacbfad610c3a6898d9d27833567ba1783ff248a281b8111ec3c08eea17d30cb946092ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaymentModule-8ffd4e084dd4f67841add729374838296de21eef78b69d12012cd7fceacbfad610c3a6898d9d27833567ba1783ff248a281b8111ec3c08eea17d30cb946092ed"' :
                                            'id="xs-components-links-module-PaymentModule-8ffd4e084dd4f67841add729374838296de21eef78b69d12012cd7fceacbfad610c3a6898d9d27833567ba1783ff248a281b8111ec3c08eea17d30cb946092ed"' }>
                                            <li class="link">
                                                <a href="components/PayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentRoutingModule.html" data-type="entity-link" >PaymentRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UniversityModule.html" data-type="entity-link" >UniversityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UniversityModule-52a64ff8417af6a7cffae1066e58322da964488b72a292f781438dc33242de19fb9a393808e856758cf1f02a567ec5b178c15b26349e092cb12a55e6bc61da69"' : 'data-target="#xs-components-links-module-UniversityModule-52a64ff8417af6a7cffae1066e58322da964488b72a292f781438dc33242de19fb9a393808e856758cf1f02a567ec5b178c15b26349e092cb12a55e6bc61da69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UniversityModule-52a64ff8417af6a7cffae1066e58322da964488b72a292f781438dc33242de19fb9a393808e856758cf1f02a567ec5b178c15b26349e092cb12a55e6bc61da69"' :
                                            'id="xs-components-links-module-UniversityModule-52a64ff8417af6a7cffae1066e58322da964488b72a292f781438dc33242de19fb9a393808e856758cf1f02a567ec5b178c15b26349e092cb12a55e6bc61da69"' }>
                                            <li class="link">
                                                <a href="components/UniversityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UniversityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UniversityRoutingModule.html" data-type="entity-link" >UniversityRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MsgsharingService.html" data-type="entity-link" >MsgsharingService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});