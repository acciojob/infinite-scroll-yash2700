//your code here!
function loadMore() {
  // Make request to server to fetch next set of items
  // ...
  
  // Append items to existing list
  const li = document.querySelector('#infi-list');
  for (let i = 1; i <= 20; i++) {
    const item = document.createElement('li');
    item.textContent = `Item ${i}`;
    li.appendChild(item);
  }
}

// Add event listener to window object for scroll event
document.querySelector('#infi-list').addEventListener('scroll', function() {
 const list = document.querySelector('#infi-list');
  const listHeight = list.offsetHeight;
  const scrollPosition =  window.innerHeight + window.pageYOffset;
  
  if (scrollPosition > listHeight) {
    loadMore();
  }
});

// Add initial set of items to list
const list = document.querySelector('#infi-list');
for (let i = 1; i < 11; i++) {
  const item = document.createElement('li');
  item.textContent = `Item ${i}`;
  list.appendChild(item);
}

