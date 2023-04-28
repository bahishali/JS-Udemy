

const grade='CC';
// if(grade==='AA'){

// } else if (grade ==='BA'){

// } else if (grade ==='BB'){

// } else if (grade ==='CB'){

// } else if (grade ==='CC'){

// } else{

// }


//Bunu switch case ile yapma
//Switch case aynı zamanda tip kontrolü de yapar string mi number mı

switch(grade){
    case 'AA':
        console.log('You are the best!')
    break;
    case 'BA':
        console.log('Super grade!')
    break;
    case 'BB':
        console.log('Well!')
    break;
    case 'CB':
        console.log('Not too bad!')
    break;
    case 'CC':
        console.log('Could be better!')
    break;
    default:
        console.log('You are failed.')
    break;
}
