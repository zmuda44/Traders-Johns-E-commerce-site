


const createNewProduct = async (event) => {
    event.preventDefault();
    console.log("clicked")
  
    const name = document.getElementById('product-name').value.trim();
    const description = document.getElementById('product-description').value.trim();
    const category = document.getElementById('product-category').value.trim();
  
    if (name && description && category) {
      const response = await fetch(`/api/products`, {
        method: 'POST',
        body: JSON.stringify({ name, description, category }),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to create project');
    //   }
    }
  };









document
  .querySelector('.product-create-btn')
  .addEventListener('submit', createNewProduct);

//   document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);