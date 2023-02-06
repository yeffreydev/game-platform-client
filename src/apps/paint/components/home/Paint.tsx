import React, { useContext, useEffect, useRef, useState } from "react";
import PaintContext from "./../../context/AppContext";
// import styles from "./../../styles/home/Paint.module.css";
import styles from "./../../styles/home/Paint.module.css";
interface PaintProps {
  width: number;
  height: number;
}

const Paint: React.FC<PaintProps> = ({ width, height }) => {
  const [color, setColor] = useState("black");
  const [painting, setPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { paintSocket } = useContext(PaintContext);

  const startPainting = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setPainting(true);
    const canvas = event.target as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    let x = 0,
      y = 0;
    if (event.type === "mousedown") {
      x = (event as React.MouseEvent<HTMLCanvasElement>).clientX - rect.left;
      y = (event as React.MouseEvent<HTMLCanvasElement>).clientY - rect.top;
    } else {
      x = (event as React.TouchEvent<HTMLCanvasElement>).touches[0].clientX - rect.left;
      y = (event as React.TouchEvent<HTMLCanvasElement>).touches[0].clientY - rect.top;
    }
    setMousePosition({ x, y });
  };

  const stopPainting = () => {
    setPainting(false);
  };

  const paint = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!painting) {
      return;
    }
    const canvas = event.target as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    const rect = canvas.getBoundingClientRect();
    let x = 0,
      y = 0;
    if (event.type === "mousemove") {
      x = (event as React.MouseEvent<HTMLCanvasElement>).clientX - rect.left;
      y = (event as React.MouseEvent<HTMLCanvasElement>).clientY - rect.top;
    } else {
      x = (event as React.TouchEvent<HTMLCanvasElement>).touches[0].clientX - rect.left;
      y = (event as React.TouchEvent<HTMLCanvasElement>).touches[0].clientY - rect.top;
    }
    context.beginPath();
    context.moveTo(mousePosition.x, mousePosition.y);
    context.lineTo(x, y);
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.stroke();
    setMousePosition({ x, y });
    paintSocket?.emit("draw", { x, y, color, mousePosition });
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  let canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    paintSocket?.on("draw", (data: any) => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      const context = canvas?.getContext("2d");
      if (!context) {
        return;
      }
      context.beginPath();
      context.moveTo(data.mousePosition.x, data.mousePosition.y);
      context.lineTo(data.x, data.y);
      context.strokeStyle = data.color;
      context.lineWidth = 2;
      context.stroke();
    });
  }, [paintSocket]);

  return (
    <div>
      <canvas
        className={styles.paint}
        ref={canvasRef}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseMove={paint}
        onTouchStart={startPainting}
        onTouchEnd={stopPainting}
        onTouchMove={paint}
        width={width}
        height={height}
      />
      <select onChange={handleColorChange}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
};

export default Paint;
