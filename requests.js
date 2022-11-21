const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch('http://api.countrylayer.com/v2/all?access_key=f58af4a9680df6db954509b117817164')

    const data = await response.json()

    if (data.error !== undefined) {
        throw new Error(data.error.message)
    }

    return data.find((country) => country.alpha2Code === countryCode)
}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/81.97.179.119?token=5661c267aec949')

    if (response.status === 200) {
        return await response.json()
    }

    throw new Error('Issue getting location from IP address')
}