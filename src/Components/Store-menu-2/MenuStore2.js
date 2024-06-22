import React, {useState, useEffect} from 'react'
import './menuStore2.css'
import storeProducts2 from './storeProducts2.json'
import stores from '../../Data/stores.json';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const MenuStore2 = () => {
  const [data, setData] = useState([])
    const [dataStores, setDataStores] = useState([])
    const [openTopping, setOpenTopping] = useState(false)
    const [sortCriteria, setSortCriteria] = useState('NameAsc');
    useEffect(() => {
        setDataStores(stores.stores);
        setData(storeProducts2.products);
    },[]);

    const secondMenu = dataStores.length > 0 ? dataStores[1] : null;
    const handleOpenTopping = () => {
        if (openTopping === true) {
            return setOpenTopping(false)
        }
        setOpenTopping(true);

    }
    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
      };
    
      const sortData = (data) => {
        return data.sort((a, b) => {
          switch (sortCriteria) {
            case 'NameAsc':
              return a.name.localeCompare(b.name);
            case 'NameDsc':
              return b.name.localeCompare(a.name);
            case 'PriceAsc':
              return a.price - b.price;
            case 'PriceDsc':
              return b.price - a.price;
            default:
              return 0;
          }
        });
      };

  return (
    <div className='menu-right'>
        <div className='header-menu-right'>                                 
            {secondMenu && <h2 className='menu-right-text'>{secondMenu.name} menu</h2>}             
        </div>
        <div className='body-menu-right'>
            <div className='body-menu-right-top'>
                <button className='btn-filter' onClick={() => { handleOpenTopping() }}>Filter</button>
                <div className='d-flex '>
                    <label className='d-flex align-items-center' style={{ width: '100px' }}>Sort By</label>
                    <select class="form-select" aria-label="Default select example"onChange={handleSortChange} style={{ color: '#0a0458' }}>
                        <option value="NameAsc">Name (Asc)</option>
                        <option value="NameDsc">Name (Dsc)</option>
                        <option value="PriceAsc">Price (Asc)</option>
                        <option value="PriceDsc">Price (Dsc)</option>
                    </select>
                </div>
            </div>
        </div>

        {openTopping &&
            <div className='toppings'>
                <h5>Topping:</h5>
                <ul className="d-flex justify-content-between list-unstyled flex-wrap">
                    <li>
                        <input type='checkbox' /> Milk Foarm
                    </li>
                    <li>
                        <input type='checkbox' /> Pearl
                    </li>
                    <li>
                        <input type='checkbox' /> Aloe
                    </li>
                </ul>
            </div>
        }

        <div className='body-menu-right-bottom'>
            {sortData(data).map((item, index) => (
                <div key = {index} className='body-menu-right-item'>
                    <div style={{ height: '100%' }}>
                        <span className='milk-tea-id'>MT-0{item.id}</span>
                        <h5>{item.name}</h5>
                        <hr/>
                        <span className='milk-tea-toppings'>Toppings:</span>
                        <p>{item.toppings}</p>
                        <div className = 'body-menu-right-item-footer'>
                            <span className='milk-tea-price'>${item.price}</span>
                        </div>
                        
                    </div>                           
                </div>
            ))}
        </div>
    </div>
  )
}

export default MenuStore2
