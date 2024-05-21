/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const mintNFT = (name, email, marks, sgpa, cgpa) => {
    let newNFT = {
        "Name": name,
        "Email": email,
        "Marks": marks,
        "Sgpa": sgpa,
        "Cgpa": cgpa
    }
    NFTs.push(newNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
const listNFTs = () => {
    let index = 1;
    NFTs.forEach((element => {
        console.log("ID : ", index++);
        console.log("Name : ", element.Name);
        console.log("Email : ", element.Email);
        console.log("Marks : ", element.Marks);
        console.log("Sgpa : ", element.Sgpa);
        console.log("Cgpa : ", element.Cgpa);
        console.log("\n");
    }))
}

// print the total number of NFTs we have minted to the console
const getTotalSupply = () => {
    console.log("Total Supply is ", NFTs.length);
}

// call your functions below this line
mintNFT("Yaswanth", "yryr2004@gmail.com", 97, 8.71, 8.5);
mintNFT("Himasai", "bhsr2003@gmail.com", 95, 8.91, 8.70);
listNFTs();
getTotalSupply();
