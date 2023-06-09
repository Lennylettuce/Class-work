// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
  //export is used to make sure this function gets passed to the index which gets passed to the webpack to bundle any other files in the src folder

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
