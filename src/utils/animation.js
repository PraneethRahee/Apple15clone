export const animateWithGsapTimeline = (time,rotationRef,rotationState,firstTarget,secondTarget,animationProps) => {
    time.to(rotationRef.current.rotation,{
        y:rotationState,
        duration:1,
        ease:'power2.inOut'
    })
    time.to(firstTarget,{
        ...animationProps,
        ease:'power2.inOut'
    },'<')//'<' is used to insert the animation to the start of the previous animation
    time.to(secondTarget,{
        ...animationProps,
        ease:'power2.inOut'
    },'<')
}