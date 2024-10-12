// const showBtn = document.getElementById('showBtn');
// const meVoTam = document.getElementById('voTam');
// const listMeLa = document.getElementsByClassName('meLa');
// const listMeCungLa = document.getElementsByClassName('meCungLa');
// showBtn.addEventListener('click', showText());


// function showText() {
//     let counter = 0;
//     if(counter == listMeLa.length || counter == listMeCungLa.length){
//         counter = 0;
//     }counter++;
    
//     if(listMeLa[counter] !== listMeLa.length){
//         listMeLa[counter].style.display = '';
//         if(listMeLa[counter].style.display == listMeLa[counter - 1].style.display){
//             listMeLa[counter - 1].style.display = 'none';
//             };
//     }else {
//         listMeLa[counter].style.display = 'none';
//         listMeCungLa[counter].style.display = '';
//         if(listMeCungLa[counter].style.display == listMeCungLa[counter -1].style.display){
//             listMeCungLa[counter - 1].style.display = 'none'
//         }
//     };

// };


//all above is my test
//below this is the main


const showBtn = document.getElementById('showBtn');
const mainContent = document.getElementById('mainContainer');

mainContent.style.opacity = 0;
mainContent.style.height = 0;
showBtn.addEventListener('click', () => {
    mainContent.style.opacity = '1';
    mainContent.style.height = '100%';
    mainContent.style.transition = 'all 2s ease-in-out';
});