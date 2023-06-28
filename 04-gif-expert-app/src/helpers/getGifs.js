
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/trending?api_key=3HqWl25KUh01N7H6A8MmM1KKqE4JozSR&q=${category}&limit=20`
    const resp = await fetch(url)
    const {data} = await resp.json()
  
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
  
    console.log(gifs);
  }