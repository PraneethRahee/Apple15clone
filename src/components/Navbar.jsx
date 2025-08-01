import React from 'react'
import {appleImg, bagImg, searchImg} from "../utils/index.js";
import {navLists} from "../constants/index.js";

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="apple" width={14} height={18}/>
                <div className="flex flex-1 justify-center max-sm:hidden ">
                    {
                        navLists.map((nav) => (
                            <div key={nav}
                                 className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                                {nav}
                            </div>
                        ))
                    }
                </div>
                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" width={18} height={18}/>
                    <img src={bagImg} alt="bag" width={18} height={18}/>
                </div>
            </nav>
        </header>
    )
}
export default Navbar

//
// < div className= "container mx-auto px-4 py-8" >
//     <div className= "grid grid-cols-2 md:grid-cols-3 gap-6" >
//     { %- if section.settings.collection.products.size > 0 - %}
// {%-
//     for product in section.settings.collection.products limit: section.settings.products_to_show - %
// }
// <div className="bg-white shadow-lg rounded-lg relative w-full aspect-[433/444] overflow-hidden">
//     <a href="{{ product.url }}">
//         <img id="productImage" src="{{ product.featured_image | img_url: 'large' }}"
//              className="w-full h-full object-cover rounded-md"/>
//         <canvas id="canvas" className="absolute top-0 left-0 w-full h-full"></canvas>
//
//         {%- case forloop.index -%}
//         {%- when 1 -%}
//         <button className="absolute flex items-center justify-center text-black z-10 bg-white rounded-full border-black w-[5%] h-[5%] text-[12px] font-medium leading-none
//                top-[55%] left-[55%]
//                md:top-[55%] md:left-[55%]
//                sm:top-[10%] sm:left-[90%] ">
//             +
//         </button>
//
//         {%- when 2 -%}
//         <button className="absolute flex items-center justify-center text-black font-bold z-10 bg-white rounded-full"
//                 style="width: 5%; height: 5%; top: 53.6%; left: 59.2%; font-size: 15px;font-weight: 500;">+
//         </button>
//         {%- when 3 -%}
//         <button className="absolute flex items-center justify-center text-black font-bold z-10 bg-white rounded-full"
//                 style="width: 5%; height: 5%; top: 18.5%; left: 62%; font-size: 15px;font-weight: 500;">+
//         </button>
//         {%- when 4 -%}
//         <button className="absolute flex items-center justify-center text-black font-bold z-10 bg-white rounded-full"
//                 style="width: 5%; height: 5%; top: 15%; left: 70%; font-size: 15px;font-weight: 500;">+
//         </button>
//         {%- when 5 -%}
//         <button className="absolute flex items-center justify-center text-black font-bold z-10 bg-white rounded-full"
//                 style="width: 5%; height: 5%; top: 25%; left: 45%;font-size: 15px;font-weight: 500;">+
//         </button>
//         {%- when 6 -%}
//         <button className="absolute flex items-center justify-center text-black font-bold z-10 bg-white rounded-full"
//                 style="width: 5%; height: 5%; top: 35%; left: 71%;font-size: 15px;font-weight: 500;">+
//         </button>
//         {%- endcase -%}
//     </a>
// </div>
// {%
//     -endfor - %
// }
// {%
//     -
// else
//     - %
// }
// <p className="text-center text-gray-600 col-span-2 md:col-span-3">No products available.</p>
// {%
//     -endif - %
// }
// </div>
// </div>