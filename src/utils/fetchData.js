export const exGetOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_EX_API,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}
export const youtubeGetOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
}
export const fetchData = async (url , options)=> {
   const response = await fetch(url , options)
   const data = await response.json();
   return data
}