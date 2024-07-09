module.exports =  (id, firstName, lastName, grade, math, physics, chemistry) => {
    return(`
        <article>
        <h2>Mokinys ${id}</h2>
        <div>
            <p>${firstName}</p>
            <p>${lastName}</p>
            <p>${grade}</p>
            <details>
                <summary>Detali informacija</summary>
                <h2>Pazymiai</h2>
                <ul>
                    <li>Matematika: ${math}</li>
                    <li>Fizika: ${physics}</li>
                    <li>Chemija: ${chemistry}</li>
                </ul>
            </details>
        </div>
    </article>`
    )
}