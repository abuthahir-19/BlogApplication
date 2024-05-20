// const options = {
//     method: 'GET',
//     url: 'https://blogsapi.p.rapidapi.com/',
//     params: {
//         ordering: '-date_published'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'c98f2fc750mshcba7238edbcaa27p1fa8dajsn4ddc5c3c50b0',
//         'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com'
//     }
// };

const options = {
    method: 'GET',
    url: 'https://blogsapi.p.rapidapi.com/',
    params: { category: '5' },
    headers: {
        'X-RapidAPI-Key': 'c98f2fc750mshcba7238edbcaa27p1fa8dajsn4ddc5c3c50b0',
        'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com'
    }
};

export { options };