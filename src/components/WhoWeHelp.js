import React, { useEffect, useState } from "react";
import mockData from "../Helpers/mockWhoWeHelpData.js";

const PAGE_SIZE = 3;

const WhoWeHelp = () => {
  const [category, setCategory] = useState('fundations');
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [category]);

  const currentCategory = mockData[category];
  const totalPages = Math.ceil(currentCategory.length / PAGE_SIZE);
  const currentPageItems = currentCategory.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <>
    <div className ="decor_wrapper">
    <h5 className = "help_header">Komu pomagamy?</h5>
    <img className="decor_help" src="assets/Decoration.svg" alt="decor" />
    </div>
    <div className="wrapper_btn">
      <button className ="btn_help" onClick={() => { setPage(0); setCategory('fundations'); }} className = "btn_help">Fundacjom</button>
      <button className ="btn_help" onClick={() => { setPage(0); setCategory('nonGovernmentalOrg'); }} className = "btn_help">Organizacjom <br/> pozarządowym</button>
      <button className ="btn_help" onClick={() => { setPage(0); setCategory('localCollections'); }} className = "btn_help">zbiórkom lokalnym</button>
      </div>
      <p className="help_description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
    <div className ="organization_wrapper">
      <ul>
        {currentPageItems.map((itemData) => (
          <li>
            <div className="organization_name">{itemData.number}</div>
            <div className="organization_name">{itemData.name}</div>
            <div className="organization_mission">{itemData.copy}</div>
            <div className ="things">{itemData.items}</div>
          </li>
        ))}
      </ul>
    </div>
    {totalPages > 1 && (
      <div className = "site_numbers">
        {new Array(totalPages).fill(null).map((_noop, index) => (
          <button onClick={() => setPage(index)} style={{ border: index === page ? '1px solid #707070' : 'none'}}>{index + 1}</button>
        ))}
      </div>
    )}
    </>
  );
}

export default WhoWeHelp;