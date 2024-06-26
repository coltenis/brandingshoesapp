import React from 'react'
import style from './style.css'

const CustomFilters=()=>{

    function toogleHide(){
        let isHide=document.querySelector('.vtex-search-result-3-x-filtersWrapper--filters-native-scroll')?.classList.contains('vtex-search-result-3-x-filtersWrapper--hidden')
        if(isHide){
            document.querySelector('.vtex-search-result-3-x-filtersWrapper--filters-native-scroll')?.classList.remove('vtex-search-result-3-x-filtersWrapper--hidden')
        }else{
            document.querySelector('.vtex-search-result-3-x-filtersWrapper--filters-native-scroll')?.classList.add('vtex-search-result-3-x-filtersWrapper--hidden')
        }
    }
    document?.querySelector(style.searchBtn)?.addEventListener('click',()=>{document?.querySelector('.vtex-store-components-3-x-searchBarContainer')?.classList.add('vtex-store-components-3-x-searchBarContainer--showw')})
    return (
    <>
    <style>
        {`
        body > div.render-container.render-route-store-search-department > div.render-provider > div.vtex-store__template.bg-base > div > div:nth-child(5) > div > div > section > div.relative.justify-center.flex > div > div:nth-child(3) > div > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div > div > div{
            width:100%!important;
        }
        body > div.render-container.render-route-store-search-department > div > div.vtex-store__template.bg-base > div > div:nth-child(5) > div > div > section > div.relative.justify-center.flex > div > div:nth-child(3) > div > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div > div:nth-child(2){
            height: 100%;
            display: block;
            position: absolute;
            margin-top: 56px;
        }
        @media  (max-width: 968px) {
            .vtex-search-result-3-x-buttonShowMore a.vtex-button {
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 30px;
                display: flex;
                align-items: center;
                text-transform: uppercase;
                height:40px;
                width:360px;
                color: #000000;
            }
        }
        .vtex-search-result-3-x-buttonShowMore .vtex-button {
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            height:40px;
            width:360px;
            color: #000000;
        }
        .vtex-search-result-3-x-buttonShowMore .vtex-button:hover {
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            height:40px;
            width:360px;
            color: white;
        }
        body > div.render-container.render-route-store-search-subcategory > div > div.vtex-store__template.bg-base > div > div:nth-child(5) > div > div > section > div.relative.justify-center.flex > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.vtex-search-result-3-x-filter__container.vtex-search-result-3-x-filter__container--filters-native-scroll.vtex-search-result-3-x-filter__container--hidden.bb.b--muted-4.vtex-search-result-3-x-filter__container--priceRange > div.vtex-search-result-3-x-filter.vtex-search-result-3-x-filter--filters-native-scroll.vtex-search-result-3-x-filter--hidden.pv5.vtex-search-result-3-x-filterAvailable.vtex-search-result-3-x-filterAvailable--filters-native-scroll.vtex-search-result-3-x-filterAvailable--hidden > div > div > span,
        body > div:nth-child(315) > div.vtex-search-result-3-x-sidebar.w-auto-ns.h-100.fixed.top-0.z-9999.bg-base.shadow-2.flex.flex-column.w-80.right-0 > div.vtex-search-result-3-x-accordionFilter.h-100.pb9.overflow-scroll > div.vtex-search-result-3-x-accordionFilterContainer.vtex-search-result-3-x-accordionFilterContainer--filters-native-scroll.vtex-search-result-3-x-accordionFilterContainer--hidden.vtex-search-result-3-x-accordionFilterContainer--gama-de-precios.vtex-search-result-3-x-accordionFilterContainer--filters-native-scroll--gama-de-precios.vtex-search-result-3-x-accordionFilterContainer--hidden--gama-de-precios.pl7 > div > div > span.vtex-search-result-3-x-accordionFilterItemTitle.vtex-search-result-3-x-accordionFilterItemTitle--filters-native-scroll.vtex-search-result-3-x-accordionFilterItemTitle--hidden{
            font-size:0px
        }
        body > div.render-container.render-route-store-search-subcategory > div > div.vtex-store__template.bg-base > div > div:nth-child(5) > div > div > section > div.relative.justify-center.flex > div > div:nth-child(2) > div > div > div > div:nth-child(1) > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.vtex-search-result-3-x-filter__container.vtex-search-result-3-x-filter__container--filters-native-scroll.vtex-search-result-3-x-filter__container--hidden.bb.b--muted-4.vtex-search-result-3-x-filter__container--priceRange > div.vtex-search-result-3-x-filter.vtex-search-result-3-x-filter--filters-native-scroll.vtex-search-result-3-x-filter--hidden.pv5.vtex-search-result-3-x-filterAvailable.vtex-search-result-3-x-filterAvailable--filters-native-scroll.vtex-search-result-3-x-filterAvailable--hidden > div > div > span:before{
            content:"Rango de Precios";
            font-family: 'Founders Grotesk'';
            font-style: normal;
            font-size: 19px;
            line-height: 160%;
            display: flex;
            align-items: center;
            letter-spacing: 0.02em;
            color: #001111;
        }
        body > div:nth-child(315) > div.vtex-search-result-3-x-sidebar.w-auto-ns.h-100.fixed.top-0.z-9999.bg-base.shadow-2.flex.flex-column.w-80.right-0 > div.vtex-search-result-3-x-accordionFilter.h-100.pb9.overflow-scroll > div.vtex-search-result-3-x-accordionFilterContainer.vtex-search-result-3-x-accordionFilterContainer--filters-native-scroll.vtex-search-result-3-x-accordionFilterContainer--hidden.vtex-search-result-3-x-accordionFilterContainer--gama-de-precios.vtex-search-result-3-x-accordionFilterContainer--filters-native-scroll--gama-de-precios.vtex-search-result-3-x-accordionFilterContainer--hidden--gama-de-precios.pl7 > div > div > span.vtex-search-result-3-x-accordionFilterItemTitle.vtex-search-result-3-x-accordionFilterItemTitle--filters-native-scroll.vtex-search-result-3-x-accordionFilterItemTitle--hidden:before{
            content:"Rango de Precios";
        }
        `}
    </style>
    <div className={`${style.ContainerfilterForm} flex flex-col p10`} onClick={()=>toogleHide()}>
        <div className={`${style.VerMasfilterForm}`} 
            onClick={()=>toogleHide()}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7812 1.31475C10.5966 1.31475 10.4137 1.35095 10.2431 1.42129C10.0725 1.49162 9.91746 1.59471 9.78688 1.72467C9.6563 1.85463 9.55272 2.00891 9.48204 2.17871C9.41137 2.34851 9.375 2.5305 9.375 2.71429C9.375 2.89808 9.41137 3.08007 9.48204 3.24986C9.55272 3.41966 9.6563 3.57395 9.78688 3.70391C9.91746 3.83386 10.0725 3.93695 10.2431 4.00729C10.4137 4.07762 10.5966 4.11382 10.7812 4.11382C11.1542 4.11382 11.5119 3.96637 11.7756 3.70391C12.0393 3.44144 12.1875 3.08547 12.1875 2.71429C12.1875 2.34311 12.0393 1.98713 11.7756 1.72467C11.5119 1.4622 11.1542 1.31475 10.7812 1.31475ZM8.48438 2.24778C8.59196 1.72048 8.8794 1.24642 9.298 0.905915C9.7166 0.565407 10.2406 0.379395 10.7812 0.379395C11.3219 0.379395 11.8459 0.565407 12.2645 0.905915C12.6831 1.24642 12.9705 1.72048 13.0781 2.24778H15V3.1808H13.0781C12.9705 3.70809 12.6831 4.18215 12.2645 4.52266C11.8459 4.86317 11.3219 5.04918 10.7812 5.04918C10.2406 5.04918 9.7166 4.86317 9.298 4.52266C8.8794 4.18215 8.59196 3.70809 8.48438 3.1808H0V2.24778H8.48438ZM4.21875 5.97986C3.84579 5.97986 3.4881 6.12731 3.22438 6.38978C2.96066 6.65224 2.8125 7.00822 2.8125 7.37939C2.8125 7.75057 2.96066 8.10655 3.22438 8.36901C3.4881 8.63148 3.84579 8.77893 4.21875 8.77893C4.59171 8.77893 4.9494 8.63148 5.21312 8.36901C5.47684 8.10655 5.625 7.75057 5.625 7.37939C5.625 7.00822 5.47684 6.65224 5.21312 6.38978C4.9494 6.12731 4.59171 5.97986 4.21875 5.97986ZM1.92188 6.91288C2.02946 6.38559 2.3169 5.91153 2.7355 5.57102C3.1541 5.23051 3.67811 5.0445 4.21875 5.0445C4.75939 5.0445 5.2834 5.23051 5.702 5.57102C6.1206 5.91153 6.40804 6.38559 6.51562 6.91288H15V7.84591H6.51562C6.40804 8.3732 6.1206 8.84726 5.702 9.18777C5.2834 9.52827 4.75939 9.71429 4.21875 9.71429C3.67811 9.71429 3.1541 9.52827 2.7355 9.18777C2.3169 8.84726 2.02946 8.3732 1.92188 7.84591H0V6.91288H1.92188ZM10.7812 10.645C10.4083 10.645 10.0506 10.7924 9.78688 11.0549C9.52316 11.3173 9.375 11.6733 9.375 12.0445C9.375 12.4157 9.52316 12.7717 9.78688 13.0341C10.0506 13.2966 10.4083 13.444 10.7812 13.444C11.1542 13.444 11.5119 13.2966 11.7756 13.0341C12.0393 12.7717 12.1875 12.4157 12.1875 12.0445C12.1875 11.6733 12.0393 11.3173 11.7756 11.0549C11.5119 10.7924 11.1542 10.645 10.7812 10.645ZM8.48438 11.578C8.59196 11.0507 8.8794 10.5766 9.298 10.2361C9.7166 9.89562 10.2406 9.70961 10.7812 9.70961C11.3219 9.70961 11.8459 9.89562 12.2645 10.2361C12.6831 10.5766 12.9705 11.0507 13.0781 11.578H15V12.511H13.0781C12.9705 13.0383 12.6831 13.5124 12.2645 13.8529C11.8459 14.1934 11.3219 14.3794 10.7812 14.3794C10.2406 14.3794 9.7166 14.1934 9.298 13.8529C8.8794 13.5124 8.59196 13.0383 8.48438 12.511H0V11.578H8.48438Z" fill="#72716F"/>
            </svg> 
            &nbsp; Filtro
        </div>
    </div>
    </>)
}
export default CustomFilters