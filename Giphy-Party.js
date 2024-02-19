const $gifArea = $("#gifList");
const $searchInput = $("#search");
function addGif(res) {
  console.log("Let's get this party started!");
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "gifHolder" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100",
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}
$("form").on("submit", async function (evt) {
  evt.preventDefault();
  let searchTerm = $searchInput.val();
  $searchInput.val("");
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);
});
$("#remove").on("click", function () {
  $gifArea.empty();
});




