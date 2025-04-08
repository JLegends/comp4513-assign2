const getArtistName = (a) => {
    if (!a) return "unknown";
    
    let name = "";
    if (a.firstName && a.lastName) {
        name = `${a.firstName} ${a.lastName}`
    }
    else if (a.firstName && a.lastName == "") {
        name = a.firstName
    }
    else if (a.firstName == "" && a.lastName) {
        name = a.lastName
    }
    else name = "unknown"

    return(name)
}

export default getArtistName