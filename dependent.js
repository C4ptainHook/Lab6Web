async function fetchObject()
{
    const activefile = "Saved.txt";
    let url = `/readfile.php?objectname=${activefile}`;

    const response = await fetch(url);

    const object = await response.text();
    console.log("From 2nd_script:\n" + object);
    document.getElementById("server-fetch-container").innerHTML = object;
}

setInterval(fetchObject, 4 * 1000);