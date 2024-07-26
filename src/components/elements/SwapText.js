import React, { useState } from "react";
import classNames from "classnames";

export default function SwapText({
  initialText,
  finalText,
  className,
  supportsHover = true,
  textClassName,
  initialTextClassName,
  finalTextClassName,
  disableClick,
  ...props
}) {
  const [active, setActive] = useState(false);
  const common = "block transition-all duration-1000 ease-slow";

  const longWord = finalText.length > initialText.length ? finalText : null;

  return (
    <div
      {...props}
      className={classNames(
        "relative overflow-hidden text-foreground",
        className
      )}
    >
      <div
        className={classNames(
          "group cursor-pointer select-none text-3xl font-bold",
          textClassName
        )}
        onClick={() => !disableClick && setActive((current) => !current)}
      >
        <span
          className={classNames(common, initialTextClassName, {
            "flex flex-col": true,
            "-translate-y-full": active,
            "group-hover:-translate-y-full": supportsHover,
          })}
        >
          {initialText}
          {Boolean(longWord?.length) && (
            <span className="invisible h-0">{longWord}</span>
          )}
        </span>
        <span
          className={classNames(
            `${common} absolute top-full`,
            finalTextClassName,
            {
              "-translate-y-full": active,
              "group-hover:-translate-y-full": supportsHover,
            }
          )}
        >
          {finalText}
        </span>
      </div>
    </div>
  );
}

{/* <div className="App">
  <SwapText
    initialText="Initial Text"
    finalText="Final Text"
    className="custom-class"
    supportsHover={true}
    textClassName="text-custom"
    initialTextClassName="initial-custom"
    finalTextClassName="final-custom"
    disableClick={false}
  />
</div>; */}
