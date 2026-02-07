const btn = document.querySelector("#btn")
const resetBtn = document.querySelector("#reset")
const statuss = document.querySelector("#status")
const findSentence = document.querySelector("p")
const resetSentenceContain = findSentence.textContent
let sentenceContain = findSentence.textContent

const curseWords = [  {    bad: "var",    good: "const",  },  {    bad: "float",    good: "grid",  }]

console.log(sentenceContain)


function replaceWords(curseWords){
curseWords.forEach(each=>{
let switcher = sentenceContain.replace(each.bad, `<span class="highlight">${each.good}</span>`)

sentenceContain = switcher

})
return sentenceContain
}

btn.addEventListener("click", ()=> {
    const hasBadWords = curseWords.some((w) => sentenceContain.includes(w.bad))
    if (!hasBadWords) {
        statuss.textContent = "du er safe bror"
        return
    }

    const cleanText = replaceWords(curseWords)
    findSentence.innerHTML = cleanText
    statuss.textContent = ""
})

resetBtn.addEventListener("click", () =>{
    sentenceContain = resetSentenceContain
    findSentence.textContent=resetSentenceContain
    statuss.textContent=""
})
