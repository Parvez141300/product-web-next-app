import React from "react";

const layout = ({children}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* left side */}
      <aside className="col-span-3">
        <ul>
          <li>Links</li>
        </ul>
      </aside>
      {/* right side routing */}
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default layout;
