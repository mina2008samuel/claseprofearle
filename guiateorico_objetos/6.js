const personas =[
    {surname: `zoe`,
        address: {
            street: {
                name:`Sesame Street`,
                number: `123`
            },
        },
    },
    {surname: `Mariner`,},
    {
        surname: `Carmen`,
        address: {

        },
    },
];
const streetNames = personas.map(
    p => p.address?.street?.name);

console.log(streetNames); // [`Sesame Street`, undefined, undefined]