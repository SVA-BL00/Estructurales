interface FileSystemComponent{
    showDetails(indent?: string): void;
}

class FileEx implements FileSystemComponent{
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    showDetails(indent?: string): void {
        console.log(`${indent}- Archivo: ${this.name}`);
    }
}


class Folder implements FileSystemComponent{
    private name: string;
    private content: FileSystemComponent[] = [];

    constructor(name: string){
        this.name = name;
    }

    addContent(content: FileSystemComponent): void{
        this.content.push(content);
    }

    showDetails(indent: string = "  "): void{
        console.log(`${indent} + Carpeta: ${this.name}`);
        
        this.content.forEach((content =>{
            content.showDetails(indent + '       ');
        }));
    }
}


function main(){
    const archivo1 = new FileEx('archivo.js');
    const archivo2 = new FileEx('archivo2.js');
    const archivo3 = new FileEx('archivo3.js');
    const archivo4 = new FileEx('archivo4.js');
    const archivo5 = new FileEx('archivo5.js');


    const folder1 = new Folder('Carpeta1');
    folder1.addContent(archivo1);
    folder1.addContent(archivo2);
    // folder1.showDetails();

    const folder2 = new Folder('Carpeta2');
    folder2.addContent(archivo3);
    folder2.addContent(archivo4);
    folder2.addContent(archivo5);

    // folder2.showDetails();

    folder1.addContent(folder2);
    folder1.showDetails();

}

main()