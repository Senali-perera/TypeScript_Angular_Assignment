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

//Sort the members and retrieve the 'all'
const getAll = (members: Array<Member>) => {

    return members.sort((member1: Member, member2: Member) => {
        let member1Name = member1.name.toLowerCase();
        let member2Name = member2.name.toLowerCase();

        return member1.age == member2.age ? member1Name.localeCompare(member2Name) : member2.age - member1.age;

    }).map((member: Member) => (member.name.toLowerCase()));

}

// Retrieve the 'plays'
const getPlays = (members: Array<Member>) => {
    const plays: { [index: string]: Array<string> } = {};

    members.forEach((member: Member) => {
        member.plays.forEach((play) => {
            if (plays[play]) {
                plays[play]?.push(member.name.toLowerCase());
            } else {
                plays[play] = [];
                plays[play].push(member.name.toLowerCase());
            }
        })
    })

    return plays;
}

//method to get the 'expected' result
const getExpected = (band: Band) => {

    //Get all the members by merging the past members' and current members' arrays
    const allMembers = [...band.members.current, ...band.members.past];

    //return the output
    return {
        members: {
            past: band.members.past,
            current: band.members.current,
            all: getAll(allMembers),
        },
        plays: getPlays(allMembers)
    }
}

// Get the 'expected' results
const expected: Expected = getExpected(band);

// Print the 'expected' results
console.log(expected);