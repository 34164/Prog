let huidigeTijd = new Date(); 
let schoolOpeningstijd = 9; //school begint om 9 uur.
let schoolSluitingsTijd = 16; //school sluit om 16 uur.

if (huidigeTijd.getHours() >= schoolOpeningstijd && huidigeTijd.getHours() < schoolSluitingsTijd) {
    console.log("Ik moet op school zijn");
}else{ 
    console.log("Ik hoef niet op school zijn");
}