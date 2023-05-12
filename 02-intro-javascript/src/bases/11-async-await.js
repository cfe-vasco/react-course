// const getImagePromise = () =>
//   new Promise((resolve) => resolve('https://dasdadas.com'));

// getImagePromise().then(console.log);

// const getImage = async() => {
//     return 'https://dasdadas.com'
// }

// getImage().then(console.log)

const getImage = async () => {
  try {
    const apiKey = '3HqWl25KUh01N7H6A8MmM1KKqE4JozSR';
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();