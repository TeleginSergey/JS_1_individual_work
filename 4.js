const names = ['Анна', 'Иван', 'Абдулахмед', 'Алексей', 'Екатерина']

for (let i = 0; i<names.length; i++){
    console.log(`Студент ${names[i]}, ваш порядковый номер ${i}`)
}

function findLongestName(names){
    let longest_name_len = names[0].length;
    let longest_name = names[0];
    for (let i = 1; i<names.length; i++){
        if (longest_name_len < names[i].length){
            longest_name_len = names[i].length;
            longest_name = names[i];
        }
    }
    return longest_name;
}

console.log(findLongestName(names));