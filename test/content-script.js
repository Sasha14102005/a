function deleteBlock() {
    if (!!document.getElementsByClassName(
        "svg-tip svg-tip-one-line right"
        )) {

        const arr = document.getElementsByClassName(
                "svg-tip svg-tip-one-line right"
                )


                for (let index = 0; index < arr.length; index++) {
                    arr[index].style.background = "#000000" + "99"
                    
                }
    }
}

deleteBlock();