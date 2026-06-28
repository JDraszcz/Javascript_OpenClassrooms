
        let listeMots = ["Cachalot", "Petunia", "Serviette"];
        let score = 0;
        let user = prompt("Write the following word " + listeMots[0] );

        if (user === listeMots[0]) {
            score++;
            console.log("Your score is: " + score);
        };

        user = prompt("Write the following word " + listeMots[1] );

        if (user === listeMots[1]) {
            score++;
            console.log("Your score is: " + score);
        };

        user = prompt("Write the following word " + listeMots[2] );

        if (user === listeMots[2]) {
            score++;
            console.log("Your score is: " + score);
        };