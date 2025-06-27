import Header from "./Header";



export default function MainWrapper({ children }){

    return (
        <div>
            <Header/>
            <>
                {children}
            </>
        </div>
    )

}