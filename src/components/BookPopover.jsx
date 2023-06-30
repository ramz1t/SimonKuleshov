import React from "react";
import cn from "classnames";

const BookPopover = ({ open }) => {
  return (
    <div
      id="book-popover"
      className={cn(
        "z-40 backdrop-blur-xl transition-all top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full",
        open ? "opacity-100 bg-white/[.15] fixed" : "opacity-0 hidden"
      )}
    >
      {/* <form>
        <input type="text" />
      </form> */}
    </div>
  );
};

export default BookPopover;
