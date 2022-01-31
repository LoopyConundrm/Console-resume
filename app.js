let myName = 'Abdul Muhammad'
console.log(`Name: ${myName.toUpperCase()}`);
console.log('Career: Full Stack Developer');
console.log('Description: I like bacon, not the pork kind though.');

console.log('')

console.log('My Interests:')
let myInt = ['* Coding', '* Gaming', '* Art', '* Repairing stuff'];
for (let i = 0; i < myInt.length; i++) {
    console.log(myInt[i])    
}

console.log('')

console.log('My Previous Experience:')
const displayPosition = (cName, jTitle, desc) => {
    console.log(`${cName}`, `${jTitle}`, `${desc}`)
}
    displayPosition('* Boxer, Puller, and Stocker','at Jim Burke', '- I started off pulling parts, then boxing those parts to be shipped was added, and then stocking parts in the mornings was added. So I essentially became a jack-of-all-trades there.')
    displayPosition('* Student', 'at Innovate Birmingham', '- As a student I learned to become a valuable web developer.')

    console.log('')
    
    console.log('My Skills:')
    
    const displaySkill = (sName, isCool) => {
        if (isCool == true) {
            console.log(`BAM: ${sName}`);
        } else {
            console.log(`${sName}`)
        }
    };
    
    displaySkill('Playing trumpet', true)
    displaySkill('Gaming (more of a hobby)', false)
    displaySkill('Coding', true)