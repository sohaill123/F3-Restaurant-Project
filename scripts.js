function goToMenuPage() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'block';
    getMenu();
  }
  
  function takeOrder() {
    // Function to handle the order process
  }
  
  function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        const menuContainer = document.getElementById('menu');
        menuContainer.innerHTML = '';
        data.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.className = 'menu-item';
          menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
          `;
          menuContainer.appendChild(menuItem);
        });
      })
      .catch(error => console.log('Error:', error));
  }
  
  // Functions for order processing: takeOrder(), orderPrep(), payOrder(), thankyouFnc()
  
  // Example of order processing flow
  function takeOrder() {
    // Simulating order processing using setTimeout and Promise
    console.log('Taking order...');
    setTimeout(() => {
      console.log('Order processed.');
      orderPrep()
        .then(orderStatus => {
          console.log('Order Status:', orderStatus);
          return payOrder();
        })
        .then(paidStatus => {
          console.log('Paid Status:', paidStatus);
          return thankyouFnc();
        })
        .catch(error => console.log('Error:', error));
    }, 2500);
  }
  
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  