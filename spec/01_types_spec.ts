describe('variables and constants and stuff', () => {

    it('union a type', () => {
        let p;
        p = 'taqcos';
        p = 3.14;
        p = [];

        let x: number | string;
        x = 12;
        x = 'tacos';
    });

    it('declaring an initializing a variable', () => {

        let y = 'tacos';

        let z: string | number = 'red';
    });
    it('constants must be initialized and cannot be reassigned', () => {
        const PI = 3.14;

        const favoriteNumbers = [9, 20, 108];

        favoriteNumbers[0] = 10;

        const movie = {
            title: 'Avengers End-Game',
            yearReleased: 2018
        };

        movie.yearReleased = 2019;
    });
    it('var is broken because it does not have block scope', () => {

        let age = 22;

        if (age > 21) {
            var message = 'Old Enough'; // Just demonstrating. Trained Professional. Do Not Attempt This at Home.
        }

        expect(message).toBe('Old Enough');
    });
});

describe('literals', () => {

    it('number literals', () => {
        let z = 99;
        let n1 = 1_000_000;
        expect(1000000).toBe(n1);
        let favColor = 0xff;
        let binary = 0b010101;
        let n3 = 1.2;

    });
    describe('string literals', () => {
        it('no difference between single or double', () => {
            let name = 'Darth';
            expect(name).toBe("Darth");

            let story = 'She told him "Never!!!" and then stormed off';
            let author = "Flanner O'Connor";

            let story2 = "She told him \"Never!!!\" and then stormed off"


        });
        it('has string literals', () => {

            let story = `It was a dark and stormy night.
            
            The End`;

            console.log(story);

            expect('beer').toBe(`beer`);
        });
        it('has template strings', () => {

            //  old skool string concatenation
            const name = 'Bob', age = 63;

            const info = 'His name is ' + name + ' and he is ' + age + ' years old';

            const info2 = `His name is ${name} and he is ${age} years old`;

            expect(info).toBe(info2);
        });
    });
});