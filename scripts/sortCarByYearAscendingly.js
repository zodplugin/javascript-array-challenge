function sortCarByYearAscendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];

    // Tulis code-mu disini
    // disini kita bisa mengurutkan sampai 18 loop untuk mengecek apakah tahun tersebut udah sesuai asc apa tidak
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - 1; j++) {
            if (result[j].year > result[j + 1].year) {
                [result[j], result[j + 1]] = [result[j + 1], result[j]]
            }
        }

        // ga sesuai output tapi udah ascending
        // for (let j = i + 1; j < result.length; j++) {
        //     if (result[i].year > result[j].year) {
        //         let temp = result[i];
        //         result[i] = result[j];
        //         result[j] = temp
        //     }
        // }
    }

    // x = 0
    // while (x <= 18) {
    //     for (let i = 0; i < result.length; i++) {
    //         // for (let j = 0; j < result.length - 1; j++) {
    //         //     if (result[j].year > result[j + 1].year) {
    //         //         [result[j], result[j + 1]] = [result[j + 1], result[j]]
    //         //     }
    //         // }

    //         // ga sesuai output tapi udah ascending
    //         for (let j = i + 1; j < result.length; j++) {
    //             if (result[i].year > result[j].year) {
    //                 [result[i], result[j]] = [result[j], result[j]]
    //             }
    //         }
    //     }
    //     x += 1
    // }


    // Selection sort tapi ga sesuai sama output
    // for (let i = 0; i < result.length; i++) {
    //     let min = i

    //     for (let j = i + 1; j < result.length; j++) {
    //         if (result[j].year < result[min].year) {
    //             min = j
    //         }
    //     }

    //     if (min !== i) {;
    //         [result[i], result[min]] = [result[min], result[i]]
    //     }
    // }


    // result.sort((a, b) => a.year - b.year);
    // Rubah code ini dengan array hasil sorting secara ascending
    return result;
}