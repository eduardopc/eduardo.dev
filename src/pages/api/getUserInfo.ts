export async function getData() {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pacheco.eduardo`
  )
    .then((res) => res.json())
    .then((response) => {
      return response.items
    })
    .catch(() => {
      return {
        jsonData: []
      }
    })
  return response
}
