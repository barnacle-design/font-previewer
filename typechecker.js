const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea.output")

const typeSizeTag = document.querySelector(`input[name="typesize"]`)
const typeSizeSpanTag = document.querySelector("label span.typesize-output")

const lineHeightTag = document.querySelector(`input[name="lineheight"]`)
const lineHeightSpanTag = document.querySelector("label span.lineheight")

const checkboxTag = document.querySelector(`input[name="italic"]`)

const fontTypeTag = document.querySelector(`select[name="font"]`)

const fontWeightTag = document.querySelector(`input[name="fontweight"]`)
const fontWeightSpanTag = document.querySelector("label span.fontweight")

const colorTags = document.querySelectorAll("div.colors div")

// hold the input and output texts
const originalText = outputTag.value
const sentenceOriginalText = sentenceTag.value

// When we type in sentence tag, update the output tag in the HTML
// If no value use original text in output area
sentenceTag.addEventListener("keyup", function () {
    // outputTag.innerHTML = sentenceTag.value
    if (this.value) {
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

// when we type in output tag, update sentence tag so it is two way
outputTag.addEventListener("keyup", function () {
    if (this.value) {
        sentenceTag.value = this.value
    } else {
        sentenceTag.value = sentenceOriginalText
    }
})

// when we chnage the typesize slider, update the text next to it
// change the ouput tag's font size
typeSizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px"
    typeSizeSpanTag.innerHTML = this.value + " pixels"
})

// same as above but for the lineheight
lineHeightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value
    lineHeightSpanTag.innerHTML = this.value
})

// when we change the checkbox, normal or italic if checked or not
checkboxTag.addEventListener("change", function () {
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})

// when we change the font, update the font family
fontTypeTag.addEventListener("input", function() {
    outputTag.style.fontFamily = this.value
})

// when we change the font weight, update the weight
fontWeightTag.addEventListener("input", function () {
    outputTag.style.fontWeight = this.value
    fontWeightSpanTag.innerHTML = this.value
})

// go through the colour tags then on click of one of them
// to change the bg colour and text color
// make the tag have selected class
colorTags.forEach(tag => {
    tag.addEventListener("click", function (event) {
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color

        // reset the classes
        colorTags.forEach(tag => {
            tag.classList.remove("selected")
        })

        // only add to clicked tag
        this.classList.add("selected")
    })
})



