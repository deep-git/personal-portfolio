import React from 'react'
import { IconType } from 'react-icons'

const IconButtons = ({ Icon, classStyle, innerClassStyle, iconClassStyle }: { Icon: IconType, classStyle: string, innerClassStyle: string, iconClassStyle: string }) => {
    return (
        <div className={`p-1 bg-gradient-to-r from-red to-purple ${classStyle}`}>
            <div className={`bg-white text-black border-4 border-black_background p-1 ${innerClassStyle}`}>
                <Icon className={`${iconClassStyle}`} />
            </div>
        </div>
    )
}

export default IconButtons