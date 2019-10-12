console.log("oi mundo");


function arrumar_dados(texto_csv){
    let array_linhas = texto_csv.split(/\r?\n/);
    // console.log(array_linhas)
    let array_arrays= array_linhas.map((elemento, id)=>{

        let regra_nao_quero_primeiro_elemento = id != 0
        let array = elemento.split(";")
        
        if (regra_nao_quero_primeiro_elemento){
            let saida = array.map(ele =>{
                return Number(ele)
            })
            return saida


        }else{
            return array 
        }
    })

    console.log(array_arrays)





}







var fileInput = document.getElementById("csv")

readFile = function () {
    var reader = new FileReader();
    reader.onload = function () {
        console.log("leu o documento")
        document.getElementById('out').innerHTML = reader.result;

        arrumar_dados(reader.result)

    };
    // start reading the file. When it is done, calls the onload event defined above.
    reader.readAsBinaryString(fileInput.files[0]);
};

fileInput.addEventListener('change', readFile);