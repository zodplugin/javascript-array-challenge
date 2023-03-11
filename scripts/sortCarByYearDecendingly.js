function sortCarByYearDescendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];

    // Tulis code-mu disini
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j].year < result[j + 1].year) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]]
            }
        }

        // ga sesuai output tapi udah ascending
        // for (let j = i + 1; j < result.length; j++) {
        //     if (result[i].year < result[j].year) {
        //         let temp = result[i];
        //         result[i] = result[j];
        //         result[j] = temp
        //     }
        // }
    }

    // result.sort((a, b) => b.year - a.year);

    // Rubah code ini dengan array hasil sorting secara descending
    return result;
}