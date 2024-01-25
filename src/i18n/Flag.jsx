import React from "react"

const Flag = ({ image, isSelected, ...props }) => {
    return (
        <section>
            <img alt="flag" src={image} className={isSelected ? 'flag-selected' : 'flag'} {...props} />
        </section>
    )
}

export default Flag