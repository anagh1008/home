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
    else if (query[0] === "links")
    {
        window.location.href = "https://docs.google.com/spreadsheets/d/1KXgH2cUDro-u5Zk7CmImQnbPp8bP2__Q031gG048qOs/edit?usp=sharing";

    }
      else if (query[0] === "csu")
    {
        window.location.href = "https://www.calstate.edu/apply";

    }
      else if (query[0] === "uc")
    {
        window.location.href = "https://apply.universityofcalifornia.edu/my-application/reviewSubmit";

    }
       else if (query[0] === "commonap")
    {
        window.location.href = "https://apply.commonapp.org/dashboard";

    }
       else if (query[0] === "counselmore")
    {
        window.location.href = "https://app.counselmore.com/student/tasks";
    }
    else if (query[0] === "spotify")
    {
        window.location.href = "https://open.spotify.com";
    }
    else
    {
        let query_string = query.join("+");
        window.location.href = "https://www.google.com/search?q=" + query_string;
    }
}
