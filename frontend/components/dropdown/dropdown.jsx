import React from 'react';
// import Text from 'react'
// import logo from './ss.jpg';
// ...later

class Dropdown extends React.Component {

    myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }



    render() {
        // const text = 'Unique Stays';
        return (
            <div class="dropdown">
                <button onClick="myFunction()" className="dropbtn">Dropdown</button>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        )
    }
}

export default Dropdown;