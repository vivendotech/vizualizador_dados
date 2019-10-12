console.log("oi mundo");


function parser(texto_csv){
    let array_linhas = texto_csv.split(/\r?\n/);
    // console.log(array_linhas)
    let callback =  (elemento, id)=>{
        let regra_nao_quero_primeiro_elemento = id != 0
        let array = elemento.split(";")
        
        if (regra_nao_quero_primeiro_elemento){
            let saida = array.map((ele) =>{
                return Number(ele)
            })
            return saida


        }else{
            return array 
        }
    }

    let array_arrays= array_linhas.map(callback)

    return array_arrays
}

function arrruma_saida_d3(array, id){
    let saida = array.map( (ele) =>{
        return {time:ele[0], value: ele[id]}
    })

    return saida

}






var fileInput = document.getElementById("csv")

readFile = function () {
    var reader = new FileReader();
    reader.onload = function () {
        console.log("leu o documento")
        document.getElementById('out').innerHTML = reader.result;

        let array = parser(reader.result)

        window.data = arrruma_saida_d3(array,1)
        console.log(window.data)
    };
    // start reading the file. When it is done, calls the onload event defined above.
    reader.readAsBinaryString(fileInput.files[0]);
};

fileInput.addEventListener('change', readFile);