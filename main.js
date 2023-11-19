// Sample data (replace this with your data)
const topPicksData = [
    {
      image: 'image1.jpg',
      title: 'Product 1',
      description: 'Description of Product 1.',
      link: '#'
    },
    {
      image: 'image2.jpg',
      title: 'Product 2',
      description: 'Description of Product 2.',
      link: '#'
    },
      {
      image: 'image2.jpg',
      title: 'Product 2',
      description: 'Description of Product 2.',
      link: '#'
    },
      {
      image: 'image2.jpg',
      title: 'Product 2',
      description: 'Description of Product 2.',
      link: '#'
    },
      {
      image: 'image2.jpg',
      title: 'Product 2',
      description: 'Description of Product 2.',
      link: '#'
    },
      {
      image: 'image2.jpg',
      title: 'Product 2',
      description: 'Description of Product 2.',
      link: '#'
    },
      {
      image: 'image2.jpg',
      title: 'Product 2',
      description: 'Description of Product 2.',
      link: '#'
    },
      {
      image: 'image2.jpg',
      title: 'Product 2',
      description: 'Description of Product 2.',
      link: '#'
    },
    // Add more items as needed
  ];
  
  // Function to generate list items dynamically
  function generatePickList() {
    const pickList = document.getElementById('pickList');
  
    topPicksData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('pick');
  
      const itemContent = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a href="${item.link}" class="btn">Buy Now</a>
      `;
  
      listItem.innerHTML = itemContent;
      pickList.appendChild(listItem);
    });
  }
  
  // Call the function to generate the list
  generatePickList();
  