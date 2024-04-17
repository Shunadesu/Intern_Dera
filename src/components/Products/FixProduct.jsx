import React from 'react'
import img from '../../image/FixProduct.png'
const FixProduct = ({selectedProduct}) => {

  const { name } = selectedProduct  
  return (
    <div className='px-24 flex flex-col gap-4 w-full
    md-max:px-20
    md-max-2:px-16    
    '>
        <h1 className='text-[#333333] text-[24px] font-bold'>Description</h1>
        <p className='text-[16px] leading-7'>
            Introducing the <strong>{name}</strong>, a testament to sustainability and comfort intertwining seamlessly in a contemporary design. Crafted with a steadfast commitment to environmental consciousness, this lounge chair stands as a beacon of eco-friendliness, constructed entirely from recycled plastic materials. This not only reduces waste but also champions durability, ensuring a long lifespan for the product.
        </p>
        <p className='text-[16px] leading-7'>
            Purposefully designed for unparalleled relaxation, the <strong>{name}</strong> boasts a meticulously contoured seat and backrest, meticulously engineered to provide optimal support for extended lounging sessions outdoors. Its ergonomic design cradles the body, offering a sanctuary of comfort whether you're unwinding in your garden or basking in the sun on your patio.
        </p>
        <div className='w-full h-[600px]'>
            <img src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <p className='text-[16px] leading-7'>
            Beyond its functional prowess, the chair's minimalist aesthetic elevates the ambiance of any outdoor space with its clean lines and modern silhouette. Suitable for both residential and commercial settings, its understated elegance lends a touch of sophistication to any environment. Furthermore, its weather-resistant construction ensures resilience against the elements, allowing for year-round use without compromise.
        </p>
        <p className='text-[16px] leading-7'>
            The <strong>{name}</strong> comes in a myriad of vibrant color options, allowing you to customize your outdoor decor according to your personal style preferences. From subtle neutrals to bold statement hues, there's a shade to suit every taste and aesthetic.
        </p>
        <p className='text-[16px] leading-7'>
            Versatility is another hallmark of this remarkable chair. Despite its robust construction, it remains lightweight and easy to maneuver, affording you the flexibility to rearrange your outdoor seating arrangement effortlessly. Whether used as a standalone piece or paired with other items from the Lollygagger collection, this lounge chair seamlessly integrates into any outdoor setting, beckoning you to unwind, relax, and immerse yourself in the splendor of nature.
        </p>
        <p className='text-[16px] leading-7'>
        In essence, the <strong>{name}</strong> transcends the boundaries of conventional outdoor furniture. It is not merely a place to sit; it is a symbol of sustainability, comfort, and style coalescing harmoniously to enrich your outdoor living experience. With its unwavering commitment to environmental stewardship and uncompromising dedication to quality and comfort, this lounge chair is more than just a piece of furniture—it's a lifestyle choice, embodying the ethos of mindful living and conscious consumption.
        </p>
    </div>
    )
}

export default FixProduct