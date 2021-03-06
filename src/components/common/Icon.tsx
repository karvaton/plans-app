import { ReactNode } from "react";

interface IconProps {
    type: string,
    click: () => void
}

const iconType: {[key: string]: ReactNode} = {
    edit: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2" stroke="#FF8A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.04 3.02 8.16 10.9c-.3.3-.6.89-.66 1.32l-.43 3.01c-.16 1.09.61 1.85 1.7 1.7l3.01-.43c.42-.06 1.01-.36 1.32-.66l7.88-7.88c1.36-1.36 2-2.94 0-4.94-2-2-3.58-1.36-4.94 0Z" stroke="#FF8A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.91 4.15a7.144 7.144 0 0 0 4.94 4.94" stroke="#FF8A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>,
    arrowLeft: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path stroke="#FF8A65" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"></path></svg>,
}

const Icon = ({ type, click }: IconProps) => 
    <div className={'icon icon-' + type} onClick={() => click()}>
        {iconType[type]}
    </div>

export default Icon;