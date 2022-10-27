import React, {useState} from 'react';
import './App.css';

function App() {
  // Show dropdown on hover function
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
    const showDropdown = () =>{
      setIsDropdownVisible(true);
    }
    const hideDropdown = () =>{
      setIsDropdownVisible(false);
    }

  // list of dropdown items 
  const [itemsList, setItemsList] = useState([
    {
      name: "REACT JS",
      value : "RJS"
    },
    {
      name : "ANGULAR JS",
      value : "AJS"
    },
    {
      name : "VUE JS",
      value : "VJS"
    },
    {
      name : "All of them",
      value : "AOT"
    }
  ]);

  // reference /index to user slected element 
  const [selectedItemIndex, setSelectedItemIndex] = useState(null)

  return (
    <div className='App'>
      <h1>DROPDOWN MENU</h1>
      <div className="custom-dropdown">

      {/* custom dropdown selection  */}
        <div className="custom-dropdown-selection" onMouseEnter={showDropdown}>
          {selectedItemIndex !== null ? itemsList[selectedItemIndex].name : "Which technology is better ?"}
        </div>

        {/* dropdown items list  */}
        {
          isDropdownVisible ? (
          <div className="items-holder"  onMouseLeave={hideDropdown}>
          {
            itemsList.map((item, index) => (
              <div key={item.value} className="dropdown-item" onClick={e => {
                setSelectedItemIndex(index);
                setIsDropdownVisible(false)
              }}>
                  {item.name}
              </div>
              ))
          }
        </div>
          ) : <></>
        }
      </div>
    </div>
  );
}

export default App;