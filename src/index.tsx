import React, { CSSProperties, useState } from 'react';
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
  centeredRipple?: boolean
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

export const Ripple = (props: RippleEffectType) => {

  const [style, setStyle] = useState<StyleType>(defaultProps);

  const { animationDuration = 550, color, children, className="", borderRadius="0%", centeredRipple= false } = props;

  function onClickRipple(event: React.MouseEvent<HTMLDivElement>) {

    event.stopPropagation();

    const { pageX, pageY, currentTarget } = event;

    const rect = currentTarget.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const top = centeredRipple ? rect.height/2 : pageY - (rect.top + window.scrollY);
    const left = centeredRipple ? rect.width/2 : pageX - (rect.left + window.scrollX);

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

  return (
    <div
      className={`${className}`.trim()}
      style={rippleStyle}
      onClick={onClickRipple}
    >
      {children}
      <s style={style} />
    </div>
  )

}
