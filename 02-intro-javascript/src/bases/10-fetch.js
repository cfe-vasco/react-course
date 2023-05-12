const apiKey = '3HqWl25KUh01N7H6A8MmM1KKqE4JozSR';

const httpRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

httpRequest
.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img)
})