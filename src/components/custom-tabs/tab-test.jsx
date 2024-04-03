import Tabs from "./tabs";

function RandomTab(){
    return<h1>Some random content</h1>
}




export default function TabTest(){

const tab = [{
    lable: "tab1",
    content: <div>this is tab 1 content, well come to our tabs</div>
},
{
    lable: "tab2",
    content: <div>this is tab 2 content</div>
},
{
    lable: "tab3",
    content: <RandomTab/>
}];

 function handleOnChange(getCurrentIndex){
    console.log(getCurrentIndex);
 }
    return (<Tabs tabContent={tab} onChange={handleOnChange}/>)
}