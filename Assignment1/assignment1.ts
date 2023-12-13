// Type for 'member'
type Member = {
    name: string,
    age: number,
    plays: Array<string>
}

// Type for 'band'
type Band = {
    members: {
        current: Array<Member>,
        past: Array<Member>
    }

}

// Type for 'expected'
type Expected = {
    members: {
        current: Array<Member>,
        past: Array<Member>,
        all: Array<string>
    },
    plays: {
        [index: string]: Array<string>
    }

}

// initialise 'band' variable
const band: Band = {

    members: {

        current: [

            { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },

            { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },

            { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },

            { name: 'Steve', age: 55, plays: ['guitar'] }

        ],

        past: [

            { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },

            { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },

            { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] }

        ]

    }

};

