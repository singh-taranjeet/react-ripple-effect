import React, { CSSProperties, useEffect, useState, } from "react";
interface StyleType {
  position: 'absolute';
  borderRadius: '50%';
  opacity: number,
  width: number,
  height: number,
  transform: string,
  pointerEvents: "none",
  left: number,
  top: number,
  transition: string,
  backgroundColor: string
}

interface RippleEffectType  {
  animationDuration?: number;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => {},
  children: React.ReactNode,
  className?: string,
  borderRadius?: string,
  centeredRipple?: boolean,
  forwardRef?: React.RefObject<HTMLDivElement>
}

const defaultProps: StyleType = {
  position: 'absolute',
  borderRadius: '50%',
  opacity: 0,
  left: 0,
  top: 0,
  width: 35,
  height: 35,
  transform: 'translate(-50%, -50%)',
  transition: "",
  pointerEvents: 'none',
  backgroundColor: "rgba(0, 0, 0, 30%)",
};

const CENTERED_RIPPLE_EVENT = "MUT-BUBBLE-EVENT";

export const Ripple = (props: RippleEffectType) => {

  const [style, setStyle] = useState<StyleType>(defaultProps);
  const [id] = useState((Math.random() + 1).toString(36).substring(7));
  const [rippleFromCenter, setRippleFromCenter] = useState<boolean>(false);

  const { animationDuration = 550, color, children, className="", borderRadius="0%" } = props;

  function onClickRipple(event: React.MouseEvent<HTMLDivElement>) {

    event.stopPropagation();

    const { pageX, pageY, currentTarget } = event;

    const rect = currentTarget.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const top = (rippleFromCenter) ? rect.height/2 : pageY - (rect.top + window.scrollY);
    const left = (rippleFromCenter) ? rect.width/2 : pageX - (rect.left + window.scrollX);

    setStyle({
      ...style,
      transform: 'translate(-50%, -50%)',
      transition: 'initial',
      backgroundColor: color ? color : style.backgroundColor,
      left,
      top,
      opacity: 1,
    });

    setTimeout(() => {
      setStyle({
        ...style,
        transition: `all ${animationDuration}ms`,
        opacity: 0,
        transform: `scale(${size / 9})`
      })
    }, 50);

    // unset ripple from center
    if(!props.centeredRipple) {
      setRippleFromCenter(false);
    }

    if(props.onClick) {
      props.onClick(event);
    }
  }

  const rippleStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    overflow: 'hidden',
    width: 'fit-content',
    borderRadius
  }

  function createBubble(e: any) {
    setRippleFromCenter(true);
    setTimeout(() => {
      e.target.click();
    });
  }

  useEffect(() => {
    // Add event listener 
    props?.forwardRef?.current?.addEventListener(CENTERED_RIPPLE_EVENT, createBubble);
    return () => {
      // Remove event listener
      props?.forwardRef?.current?.addEventListener(CENTERED_RIPPLE_EVENT, createBubble);
    }
  }, [props.forwardRef])

  return (
    <div
      ref={props.forwardRef}
      id={id}
      className={`mut-ripple ${className}`.trim()}
      style={rippleStyle}
      onClick={onClickRipple}
    >
      {children}
      <s style={style} />
    </div>
  )

}

export function dispatchRipple(ref: React.RefObject<HTMLDivElement>) {
    const newEvent = new Event(CENTERED_RIPPLE_EVENT);
    ref.current?.dispatchEvent(newEvent);
}
