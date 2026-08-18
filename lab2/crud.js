import readline from 'readline/promises'
import {stdin,stdout} from 'process'



const main=async () => {
    
    const cin = readline.createInterface({input:stdin,output:stdout});
    let choice;
    do{
    console.log("welcome to shopping cart🤣");
    console.log("1------add to cart");
    console.log("2------show cart");
    console.log("3------remove item ");
    console.log("4------update quantity");
    console.log("5------checkout");
    choice = await cin.question("enter your choice:");
    console.log("your choice is:",choice);
    switch(Number(choice)){
        case 1:
            console.log("add to cart");
            break;  
            case 2:
            console.log("show cart");
            break;
            case 3:
            console.log("remove item");
            break;
            case 4:
            console.log("update quantity");
            break;
            case 5:
            console.log("see you later");
            process.exit()
            break;
            default:
            console.log("invalid choice");

    }
    }while(choice !=="5");

    cin.close();
};

main();

