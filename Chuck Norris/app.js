//UI elements

const button = document.querySelector('#submit');
// 

button.addEventListener('click',function(e){
    e.preventDefault();
    const JokesNo = document.querySelector('#number').value;
    console.log(JokesNo);
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${JokesNo}`,true);

    xhr.onload = function(){
        if(this.status===200){
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output='';

            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output+=`<li>${joke.joke}</li>`;
                })
            }else{
                output+='<li>Something went wrong</li>'
            }
            document.querySelector('ul').innerHTML= output;
        }
    }
    xhr.send();
})

