function parse_query()
{
    let query_raw = document.querySelector('#searchbar').value;
    let query = query_raw.split("::");
    // clean query.shift() up
    if (query[0] === "priv")
    {
        query.shift();
        let query_string = query.join("+");
        window.location.href = "https://duckduckgo.com/?q=" + query_string;
    }
    else if(query[0] == "lyrics")
    {
        query.shift();
        let query_string = query.join("+");
        window.location.href = "https://genius.com/search?q=" + query_string;
    }
    else if (query[0] === "wiki")
    {
        window.location.href = "https://en.wikipedia.org/wiki/" + query[1];

    }
    else
    {
        let query_string = query.join("+");
        window.location.href = "https://www.google.com/search?q=" + query_string;
    }
}