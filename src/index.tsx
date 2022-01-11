import React, { useState } from 'react';
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

interface RippleEffectType {
  during?: number;
  onClick?: (event: React.MouseEvent<any>) => {};
  color?: string;
  children: React.ReactNode;
  className?: string;
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
  backgroundColor: "",
};

export const RippleEffect = (props: RippleEffectType) => {

  const [style, setStyle] = useState<StyleType>(defaultProps);

  const { during = 550, color='rgba(0, 0, 0, .3)', onClick = () => {},   className="", children } = props;

  function onClickRipple(event: React.MouseEvent<HTMLDivElement>) {

    event.stopPropagation();

    const { pageX, pageY, currentTarget } = event;

    const rect = currentTarget.getBoundingClientRect();

    const left = pageX - (rect.left + window.scrollX);
    const top = pageY - (rect.top + window.scrollY);
    const size = Math.max(rect.width, rect.height);

    setStyle({
      ...style,
      left,
      top,
      opacity: 1,
      transform: 'translate(-50%, -50%)',
      transition: 'initial',
      backgroundColor: color,
      
    });

    setTimeout(() => {
      setStyle({
        ...style,
        opacity: 0,
        transform: `scale(${size / 9})`,
        transition: `all ${during}ms`,
      })
    }, 50);

    if(onClick) {
      onClick(event);
    }

  }

  return (
    <div
      {...props}
      className={`${className}`.trim()}
      style={{
        position: 'relative',
        display: 'inline-flex',
        overflow: 'hidden',
      }}
      onClick={onClickRipple}
    >
      {children}
      <s style={style} />
    </div>
  )

}
