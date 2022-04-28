$(document).ready(function() {
    // Giphy API defaults
    const giphy = {
        baseURL: "https://api.giphy.com/v1/gifs/",
        apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
        tag: "facepalm",
        type: "random",
        rating: "pg-13"
    };
    
    // Giphy API URL
    let giphyURL = encodeURI(
        giphy.baseURL +
            giphy.type +
            "?api_key=" +
            giphy.apiKey +
            "&tag=" +
            giphy.tag +
            "&rating=" +
            giphy.rating
    );

    // Call Giphy API and render data
    var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

    // Display Gif in gif wrap container
    var renderGif = _giphy => {
        $('[id*=gif-iframe]').attr('src', _giphy.embed_url);
    };

    // Call Giphy API for new gif
    newGif();
});
