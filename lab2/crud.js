import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";

const FILE = "products.json";
const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data); //datatype done
};

const add2cart = async (item) => {
  const products = await getCart();
  const productFound = products.find((p)=> p.id === item.id);
  if(oroductFound){
    productFound.quantity +=item.quantity;
    console.log("product is updated");
  }
  else{
    products.push(item);
    console.log("product added successfully");
  }
  products.push(item);
  await saveCart(products);
};

const showcart = async () => {
  const products = await getCart();
  console.log("cart items are:", products);
};

const updateCart = async (cin) => {
  const id = Number(await cin.question("enter product id: "));
  const quantity = Number(await cin.question("enter new quantity: "));
  const products = await getCart();
  const product = products.find((item) => item.id === id);

  if (!product) {
    console.log("item not found");
    return;
  }

  product.quantity = quantity;
  await saveCart(products);
  console.log("cart updated");
};

const deleteFromCart = async () => {
  console.log("delete from cart");
};
const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;
  do {
    console.log("welcome to shopping cart🤣");
    console.log("1------add to cart");
    console.log("2------show cart");
    console.log("3------remove item ");
    console.log("4------update quantity");
    console.log("5------checkout");
    choice = await cin.question("enter your choice:");
    console.log("your choice is:", choice);
    switch (Number(choice)) {
      case 1:
        // await add2cart({ id: 101, name: "mobile", price: 10000, quantity: 3 });
        // console.log("add to cart");
        let data=await cin.question("enter id,name,price,quantity:");
        console.log("data is:",data);
        let p  =data.split(",");
        // console.table(p);
        let q=p.map((item)=> item.trim());
        let[id,name,price,quantity]=q;
        console.log(id,name,price,quantity);
        const product = {
            id: Number(id),
            name: name,
            price: Number(price),
            quantity: Number(quantity),
          };
        //   await add2cart(product);
        //   console.log("product added to cart");
        break;
      case 2:
        await showcart();
        console.log("show cart");
        break;
      case 3:
        await deleteFromCart();
        console.log("remove item");
        break;
      case 4:
        await updateCart(cin);
        console.log("update quantity");
        break;
      case 5:
        console.log("see you later");
        process.exit();
        break;
      default:
        console.log("invalid choice");
    }
  } while (choice !== "5");

  cin.close();
};

main();
