import WindowResizeHook from ".";



export default function UseWindowResizeTest(){

    const windowSize = WindowResizeHook()
    const {width, height} = windowSize

    return <div>
        <h1>Window Resize Hook</h1>
        <p>width : {width}</p>
        <p>height : {height}</p>
    </div>
}