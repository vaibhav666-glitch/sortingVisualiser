var box=[5];
box[0] = document.getElementById('box1');
box[1] = document.getElementById('box2');
box[2] = document.getElementById('box3');
box[3] = document.getElementById('box4');
box[4] = document.getElementById('box5');
var ogBox=[9,8,7,6,5]

function swapBoxes() {
   
        for(let j=1;j<5;j++)
        {
           //console.log(ogBox[i]);
            if(ogBox[j-1]>ogBox[j])
            {
                let temp=ogBox[j-1];
                ogBox[j-1]=ogBox[j];
                ogBox[j]=temp;
                setTimeout(()=>{
                forBoxRotation(j-1,j);
                    
                },j*2000)
            }
            
        }
   
}

function forBoxRotation(i,j){
    var temp = box[i].innerHTML;
    box[i].innerHTML = box[j].innerHTML;
    box[j].innerHTML = temp;
   
   box[i].classList.toggle('rotate-up');
   box[j].classList.toggle('rotate-down');

   setTimeout(() => {
   
       box[i].classList.remove('rotate-up');
       box[j].classList.remove('rotate-down');
   }, 1000); 

//}
}