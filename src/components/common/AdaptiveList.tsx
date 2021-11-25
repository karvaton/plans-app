import { useLayoutEffect, useRef } from "react";
import { ListProps } from "../../constants/props";
import { scrollShadowEffect } from "../../tools/effects";


function AdaptiveList({dataSource, renderItem, itemClass, className = "", ordered = false}: ListProps) {
    const listRef = useRef(null);
      
    const classNameList: string[] = ["adaptive-list", "shadow-box", className]
    const joinedClassNames: string = classNameList.join(" ").trim();
    
    useLayoutEffect(() => {
        if (listRef !== null) {
            scrollShadowEffect(listRef.current, joinedClassNames)
        }
    });

    const listPropsHandler = {
        className: joinedClassNames, 
        ref: listRef,
        onScroll: () => scrollShadowEffect(
            listRef.current,
            joinedClassNames
        )
    }

    const items = dataSource.map((item, index) => (
        <li key={item?.id || index} className={itemClass}>
            {renderItem(item)}
        </li>
    ))
        
    return (
        ordered ? 
            <ol {...listPropsHandler}>{items}</ol> : 
            <ul {...listPropsHandler}>{items}</ul>        
    )
}

export default AdaptiveList;