export function scrollShadowEffect(node: HTMLElement | null, exeptions: string): void {
    if (node) {
        const fullHeight = node.scrollHeight;
        const visibleHeight = node.clientHeight;
        const top = node.scrollTop;
        const scrolledList = fullHeight > visibleHeight;
        
        if (scrolledList) {
            const topShadow = shadowEffectClass(top, 'top');
            const bottomShadow = shadowEffectClass(fullHeight - visibleHeight - top, 'bottom');
            const classString = [exeptions, topShadow, bottomShadow].join(' ').trim();
            node.className = classString;
        } else {
            node.className = exeptions;
        }
    }
}


function shadowEffectClass(top: number, position: 'top' | 'bottom'): string {
    // console.log(top);
    
    const shadowValue = top <= 2 ? 0 :
                        top <= 50 ? 50 :
                        top > 100 ? 100
                        : Math.floor(top/10)*10;
    return shadowValue ? `scrolled-${position}-${shadowValue}` : '';
}
