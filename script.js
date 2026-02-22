const form = document.getElementById("review")
const review = document.getElementById("text_value")
const wordCount  = document.getElementById("wordcount")
const submit = document.getElementById("submitbtn")
const reviewRegex = /^(?:\S+(?:\s+\S+){0,199})$/;


review.addEventListener("input",()=>{

    let words = review.value.trim().split(/\s+/).filter(word =>
        word.length > 0
    )

    let count = words.length

    wordCount.textContent = count + " /200"

    if(count>200){
        wordCount.classList.add("text-red-500")
    }
    else{
         wordCount.classList.remove("text-red-500")
    }

})


form.addEventListener("submit",(event)=>{

    event.preventDefault()

    let validation = true

    let words = review.value.trim().split(/\s+/).filter(word =>
        word.length > 0
    )

    if(words.length>200||!reviewRegex.test(review.value.trim())){
        document.querySelector(".reviewerror").classList.remove("hidden")
        validation = false
    }

    else{
        document.querySelector(".reviewerror").classList.add("hidden")
        validation = true
    }


    if(validation){
        alert("Thanks For Your Review")
    }

    form.reset()

    wordCount.textContent = "0 / 200"



})